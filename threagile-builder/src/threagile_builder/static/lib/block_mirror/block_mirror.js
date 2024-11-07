'use strict';

// ALL IMPLEMENTED AS ORIGINAL

/**

 External visible stuff

 Changing mode/code can fail on the block side

 setMode(mode) -> bool
 setCode(filename, code) -> bool
 setHighlight(line) -> bool
 setReadOnly(isReadOnly)
 setToolbox(string)
 'basic'
 'advanced'
 'complete'
 list[list[string]]
 onChange(event) ->
 onModeChange
 onCodeChange

 getCode() -> string
 getMode() -> string
 getImage(callback)

 lastBlockConversionFailure: {} or null


 */

/**
 *
 */

function BlockMirror(configuration) {
  console.debug('BlockMirror');
  this.validateConfiguration(configuration);
  this.initializeVariables();

  if (!this.configuration.skipSkulpt) {
    this.loadSkulpt();
  }

  this.textToBlocks = new BlockMirrorTextToBlocks(this);
  this.textEditor = new BlockMirrorTextEditor(this);
  this.blockEditor = new BlockMirrorBlockEditor(this);

  this.setMode(this.configuration.viewMode);
}

BlockMirror.prototype.validateConfiguration = function (configuration) {
  console.debug('BlockMirror.validateConfiguration');
  this.configuration = {}; // Container

  if ('container' in configuration) {
    this.configuration.container = configuration.container;
  } else {
    throw new Error('Invalid configuration: Missing "container" property.');
  } // blocklyPath

  if ('blocklyMediaPath' in configuration) {
    this.configuration.blocklyMediaPath = configuration.blocklyMediaPath;
  } else {
    this.configuration.blocklyMediaPath = '../../static/lib/blockly/media/';
  } // Run function

  if ('run' in configuration) {
    this.configuration.run = configuration.run;
  } else {
    this.configuration.run = function () {
      console.log('Ran!');
    };
  } // readOnly

  this.configuration['readOnly'] = configuration['readOnly'] || false; // height

  this.configuration.height = configuration.height || 500; // viewMode

  this.configuration.viewMode = configuration.viewMode || 'split'; // Need to load skulpt?

  this.configuration.skipSkulpt = configuration.skipSkulpt || false; // Delay?

  this.configuration.blockDelay = configuration.blockDelay || false; // Toolbox

  this.configuration.toolbox = configuration.toolbox || 'normal'; // IsParsons?

  this.isParsons = function () {
    return false;
  }; // Convert image URLs?

  this.configuration.imageUploadHook =
    configuration.imageUploadHook ||
    function (old) {
      return Promise.resolve(old);
    };

  this.configuration.imageDownloadHook =
    configuration.imageDownloadHook ||
    function (old) {
      return old;
    };

  this.configuration.imageLiteralHook =
    configuration.imageLiteralHook ||
    function (old) {
      return old;
    };

  this.configuration.imageDetection = configuration.imageDetection || 'string';
  this.configuration.imageMode = configuration.imageMode || false;
};

BlockMirror.prototype.initializeVariables = function () {
  console.debug('BlockMirror.initializeVariables');
  this.tags = {
    toolbar: document.createElement('div'),
    blockContainer: document.createElement('div'),
    blockEditor: document.createElement('div'),
    blockArea: document.createElement('div'),
    textSidebar: document.createElement('div'),
    textContainer: document.createElement('div'),
    textArea: document.createElement('textarea'),
  };
  // Toolbar
  this.configuration.container.appendChild(this.tags.toolbar);
  // Block side
  this.configuration.container.appendChild(this.tags.blockContainer);
  this.tags.blockContainer.appendChild(this.tags.blockEditor);
  this.tags.blockContainer.appendChild(this.tags.blockArea);
  // Text side
  this.configuration.container.appendChild(this.tags.textContainer);
  this.tags.textContainer.appendChild(this.tags.textSidebar);
  this.tags.textContainer.appendChild(this.tags.textArea);

  for (let name in this.tags) {
    this.tags[name].style['box-sizing'] = 'border-box';
  }

  // Files
  this.code_ = '';
  this.mode_ = null;

  // Update Flags
  this.silenceBlock = false;
  this.silenceBlockTimer = null;
  this.silenceText = false;
  this.silenceModel = 0;
  this.blocksFailed = false;
  this.blocksFailedTimeout = null;
  this.triggerOnChange = null;
  this.firstEdit = true;

  // Toolbox width
  this.blocklyToolboxWidth = 0;

  // Listeners
  this.listeners_ = [];
};

BlockMirror.prototype.loadSkulpt = function () {
  console.debug('BlockMirror.loadSkulpt');
  Sk.configure({
      __future__: Sk.python3,
      read: function (filename) {
          if (Sk.builtinFiles === undefined ||
              Sk.builtinFiles["files"][filename] === undefined) {
              throw "File not found: '" + filename + "'";
          }
          return Sk.builtinFiles["files"][filename];
      }
  });
};

BlockMirror.prototype.removeAllChangeListeners = function () {
  console.debug('BlockMirror.removeAllChangeListeners');
  this.listeners_.length = 0;
};

BlockMirror.prototype.removeChangeListener = function (callback) {
  console.debug('BlockMirror.removeChangeListener');
  let index = this.listeners_.indexOf(callback);
  if (index !== -1) {
    this.listeners_.splice(index, 1);
  }
};

BlockMirror.prototype.addChangeListener = function (callback) {
  console.debug('BlockMirror.addChangeListener');
  this.listeners_.push(callback);
};

BlockMirror.prototype.fireChangeListener = function (event) {
  console.debug('BlockMirror.fireChangeListener');
  for (let i = 0, func; (func = this.listeners_[i]); i++) {
    func(event);
  }
};

BlockMirror.prototype.setCode = function (code, quietly) {
  console.debug('BlockMirror.setCode');
  this.code_ = code;
  if (!quietly) {
    this.blockEditor.setCode(code, true);
    this.textEditor.setCode(code, true);
  }
  this.fireChangeListener({ name: 'changed', value: code });
};

BlockMirror.prototype.getCode = function () {
  console.debug('BlockMirror.getCode');
  return this.code_;
};

BlockMirror.prototype.getMode = function () {
  console.debug('BlockMirror.getMode');
  return this.mode_;
};

BlockMirror.prototype.setMode = function (mode) {
  console.debug('BlockMirror.setMode');
  this.mode_ = mode;
  this.blockEditor.setMode(mode);
  this.textEditor.setMode(mode);
};

BlockMirror.prototype.setImageMode = function (imageMode) {
  console.debug('BlockMirror.setImageMode');
  this.configuration.imageMode = imageMode;
  if (imageMode) {
    this.textEditor.enableImages();
  } else {
    this.textEditor.disableImages();
  }
  console.log(imageMode);
};

BlockMirror.prototype.setReadOnly = function (isReadOnly) {
  console.debug('BlockMirror.setReadOnly');
  this.textEditor.setReadOnly(isReadOnly);
  this.blockEditor.setReadOnly(isReadOnly);
  $(this.configuration.container).toggleClass(
    'block-mirror-read-only',
    isReadOnly
  );
};

BlockMirror.prototype.refresh = function () {
  console.debug('BlockMirror.refresh');
  this.blockEditor.resized();
  this.textEditor.codeMirror.refresh();
};

BlockMirror.prototype.forceBlockRefresh = function () {
  console.debug('BlockMirror.forceBlockRefresh');
  this.blockEditor.setCode(this.code_, true);
};

BlockMirror.prototype.VISIBLE_MODES = {
  block: ['block', 'split'],
  text: ['text', 'split'],
};

BlockMirror.prototype.BREAK_WIDTH = 675;

BlockMirror.prototype.setHighlightedLines = function (lines, style) {
  console.debug('BlockMirror.setHighlightedLines');
  this.textEditor.setHighlightedLines(lines, style);
  //this.blockEditor.highlightLines(lines, style);
};

BlockMirror.prototype.clearHighlightedLines = function () {
  console.debug('BlockMirror.clearHighlightedLines');
  this.textEditor.clearHighlightedLines();
  //this.blockEditor.unhighlightLines(lines, style);
};
