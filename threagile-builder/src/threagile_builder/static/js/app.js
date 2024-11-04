// Define the parent block "Threagile Builder"
Blockly.Blocks['ThreagileBuilder'] = {
  init: function () {
    this.appendDummyInput().appendField('Threagile Build')
    this.appendStatementInput('ENTRIES').setCheck(null)
    this.setColour(230)
    this.setTooltip("The Threagile Build's entries.")
    this.setHelpUrl('')
  }
}

// Define the entries as input blocks
const entries = [
  { name: 'Apple', tooltip: 'Apple' },
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

// Initialize Blockly workspace
var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  move:{
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: false},
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
