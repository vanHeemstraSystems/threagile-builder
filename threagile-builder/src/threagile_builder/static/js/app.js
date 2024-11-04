// // Define the parent block "Threagile Builder"
// Blockly.Blocks['ThreagileBuilder'] = {
//   init: function () {
//     this.appendDummyInput().appendField('Threat Model')
//     this.appendStatementInput('ENTRIES').setCheck(null)
//     this.setColour(230)
//     this.setTooltip("The Threagile Build's entries.")
//     this.setHelpUrl('')
//   }
// }

// Define a block that accepts a Data Assets block
Blockly.Blocks['Threat Model'] = {
  init: function () {
    this.appendDummyInput().appendField('Threat Model')
    this.appendValueInput('INPUT')
      .setCheck('Data Assets')
      .appendField('Data Assets')
    this.appendValueInput('INPUT')
      .setCheck('Technical Components')
      .appendField('Technical Components')
    this.appendValueInput('INPUT')
      .setCheck('Communication Links')
      .appendField('Communication Links')
    this.appendValueInput('INPUT')
      .setCheck('Trust Boundaries')
      .appendField('Trust Boundaries')
    this.setColour(160)
    this.setTooltip(
      'This block accepts Data Assets, Technical Components, Communication Links, and Trust Boundaries.'
    )
    this.setHelpUrl('')
  }
}

// Define a Data Assets block
Blockly.Blocks['Data Assets'] = {
  init: function () {
    this.appendDummyInput().appendField('Data Assets')
    this.setOutput(true, 'Data Assets')
    this.setColour(230)
    this.setTooltip('This block represents Data Assets.')
    this.setHelpUrl('')
  }
}

// Define a Technical Components block
Blockly.Blocks['Technical Components'] = {
  init: function () {
    this.appendDummyInput().appendField('Technical Components')
    this.setOutput(true, 'Technical Components')
    this.setColour(230)
    this.setTooltip('This block represents Technical Components.')
    this.setHelpUrl('')
  }
}

// Define a Communication Links block
Blockly.Blocks['Communication Links'] = {
  init: function () {
    this.appendDummyInput().appendField('Communication Links')
    this.setOutput(true, 'Communication Links')
    this.setColour(230)
    this.setTooltip('This block represents Communication Links.')
    this.setHelpUrl('')
  }
}

// Define a Trust Boundaries block
Blockly.Blocks['Trust Boundaries'] = {
  init: function () {
    this.appendDummyInput().appendField('Trust Boundaries')
    this.setOutput(true, 'Trust Boundaries')
    this.setColour(230)
    this.setTooltip('This block represents Trust Boundaries.')
    this.setHelpUrl('')
  }
}

// // Define Data Assets block
// Blockly.Blocks['Data Assets'] = {
//   init: function () {
//     this.jsonInit({
//       message0: 'Data Assets %1',
//       args0: [
//         {
//           type: 'input_value',
//           name: 'VALUE',
//           check: 'String'
//         }
//       ],
//       output: 'Number',
//       colour: 160,
//       tooltip: 'Data Assets',
//       helpUrl: 'http://www.w3schools.com/jsref/jsref_length_string.asp'
//     })
//   }
// }

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
      type: 'Threat Model'
    },
    {
      kind: 'block',
      type: 'Data Assets'
    },
    {
      kind: 'block',
      type: 'Technical Components'
    },
    {
      kind: 'block',
      type: 'Communication Links'
    },
    {
      kind: 'block',
      type: 'Trust Boundaries'
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
