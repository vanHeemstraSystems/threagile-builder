Blockly.Blocks['ast_AuthorDef'] = {
    init: function () { },
    // TODO: Not mutable currently
    updateShape_: function () { },
    /**
     * Create XML to represent the (non-editable) name and arguments.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () { },
    /**
     * Parse XML to restore the (non-editable) name and parameters.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) { },
};

Blockly.Python['ast_AuthorDef'] = function (block) { };

BlockMirrorTextToBlocks.prototype['ast_AuthorDef'] = function (node, parent) { };
