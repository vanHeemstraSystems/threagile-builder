// Define a parent block that accepts a other blocks
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
    },
    {
        kind: 'block',
        type: 'procedures_defnoreturn',
        fields: {
            "NAME": "main"
        },
        statement: {
            "name": "STACK",
            "contents": [
                {
                    kind: 'block',
                    type: 'text_print',
                    value: {
                        kind: 'block',
                        type: 'text',
                        fields: {
                            "TEXT": "Hello from main!"
                        }
                    }
                }
            ]
        }
    },
    {
        kind: 'block',
        type: 'text',
        fields: {
            "TEXT": "Sample Text"
        }
    },
    {
        kind: 'block',
        type: 'text_print'
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

// document.getElementById('runBuild').onclick = function () {
//   const xml = Blockly.Xml.workspaceToDom(workspace)
//   const code = Blockly.Xml.domToText(xml)
//   fetch('/run-build', {
//     method: 'POST',
//     body: JSON.stringify({ code: code }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById('result').innerText = JSON.stringify(
//         data,
//         null,
//         2
//       )
//     })
// }

// document.getElementById('executeCode').onclick = function () {
//     const code = Blockly.JavaScript.workspaceToCode(workspace);
//     document.getElementById('code').value = code;
//     fetch('/execute-code', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ code: code})
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         alert("See console.log"); // For testing only!
//         // alert(JSON.stringify(data)); // Throws ReferenceError: window is not defined
//     });
// }
