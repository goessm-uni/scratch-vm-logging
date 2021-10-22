const VirtualMachine = require('scratch-vm-default');
const ScratchLogSender = require('scratch-log-sender')

class LoggingVirtualMachine extends VirtualMachine {
    /**
     * Handle a Blockly event for the current editing target.
     * @param {!Blockly.Event} e Any Blockly event.
     */
    blockListener (e) {
        if (this.editingTarget) {
            ScratchLogSender.userEventLog.logListenEvent(e, this.editingTarget.blocks);
        }
        super.blockListener(e);
    }
}

module.exports = LoggingVirtualMachine;
