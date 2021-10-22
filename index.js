const VirtualMachine = require('scratch-vm-default');
const ScratchLogSender = require('scratch-log-sender')

class LoggingVirtualMachine extends VirtualMachine {
    /**
     * Overwrite blockListener to add log call.
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
