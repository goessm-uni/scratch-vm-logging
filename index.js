const VirtualMachine = require('scratch-vm-default');
const UserEventLog = require('./src/user-logging/user-event-log');

class LoggingVirtualMachine extends VirtualMachine {
    /**
     * Handle a Blockly event for the current editing target.
     * @param {!Blockly.Event} e Any Blockly event.
     */
    blockListener (e) {
        if (this.editingTarget) {
            UserEventLog.logListenEvent(e, this.editingTarget.blocks);
        }
        super.blockListener(e);
    }
}

module.exports = LoggingVirtualMachine;
