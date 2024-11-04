// Define the parent block "Threagile Builder"
Blockly.Blocks['ThreagileBuilder'] = {
  init: function () {
    this.appendDummyInput().appendField('Threat Model')
    this.appendStatementInput('ENTRIES').setCheck(null)
    this.setColour(230)
    this.setTooltip("The Threagile Build's entries.")
    this.setHelpUrl('')
  }
}

// Define a block that accepts an input block
Blockly.Blocks['input_block'] = {
  init: function () {
    this.appendValueInput('INPUT')
      .setCheck('Number')
      .appendField('Input Block with')
    this.setColour(160)
    this.setTooltip('This block accepts a number input.')
    this.setHelpUrl('')
  }
}

// Define a simple number block
Blockly.Blocks['number_block'] = {
  init: function () {
    this.appendDummyInput().appendField('Number')
    this.setOutput(true, 'Number')
    this.setColour(230)
    this.setTooltip('This block represents a number.')
    this.setHelpUrl('')
  }
}

// Define Data Assets block
Blockly.Blocks['Data Assets'] = {
  init: function () {
    this.jsonInit({
      message0: 'Data Assets %1',
      args0: [
        {
          type: 'input_value',
          name: 'VALUE',
          check: 'String'
        }
      ],
      output: 'Number',
      colour: 160,
      tooltip: 'Data Assets',
      helpUrl: 'http://www.w3schools.com/jsref/jsref_length_string.asp'
    })
  }
}

// Define the entries as input blocks
const entries = [
  // { name: 'Apple', tooltip: 'Apple', color: 160, output: null },
  { name: 'Banana', tooltip: 'Banana' },
  { name: 'Chocolate', tooltip: 'Chocolate' },
  { name: 'Dumpling', tooltip: 'Dumpling' },
  { name: 'Elderberry', tooltip: 'Elderberry' },
  { name: 'Fig', tooltip: 'Fig' },
  { name: 'Grapefruit', tooltip: 'Grapefruit' },
  { name: 'Huckleberries', tooltip: 'Huckleberries' },
  { name: 'Icecream', tooltip: 'Icecream' },
  { name: 'Jackfruit', tooltip: 'Jackfruit' }
]

// Create each entry block
entries.forEach(entry => {
  Blockly.Blocks[entry.name.replace(/\s+/g, '')] = {
    init: function () {
      this.appendDummyInput().appendField(entry.name)
      this.setColour(160)
      this.setTooltip(entry.tooltip)
      this.setHelpUrl('')
    }
  }
})

// Initialize Blockly toolbox
var toolbox = {
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'ThreagileBuilder'
    },
    {
      kind: 'block',
      type: 'input_block'
    },
    {
      kind: 'block',
      type: 'number_block'
    },
    {
      kind: 'block',
      type: 'Data Assets'
    },
    {
      kind: 'block',
      type: 'Banana'
    },
    {
      kind: 'block',
      type: 'Chocolate'
    },
    {
      kind: 'block',
      type: 'Dumpling'
    },
    {
      kind: 'block',
      type: 'Elderberry'
    },
    {
      kind: 'block',
      type: 'Fig'
    },
    {
      kind: 'block',
      type: 'Grapefruit'
    },
    {
      kind: 'block',
      type: 'Huckleberries'
    },
    {
      kind: 'block',
      type: 'Icecream'
    },
    {
      kind: 'block',
      type: 'Jackfruit'
    }
  ]
}

// Initialize Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: false
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true
  },
  trashcan: true
})

document.getElementById('runBuild').onclick = function () {
  const xml = Blockly.Xml.workspaceToDom(workspace)
  const code = Blockly.Xml.domToText(xml)
  fetch('/run-build', {
    method: 'POST',
    body: JSON.stringify({ code: code }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = JSON.stringify(
        data,
        null,
        2
      )
    })
}
