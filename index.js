const VirtualMachine = require('scratch-vm-default');
const ScratchLogSender = require('scratch-log-sender')

class LoggingVirtualMachine extends VirtualMachine {

    /**
     * Overwrite greenFlag to add log call.
     */
    greenFlag () {
        ScratchLogSender.userEventLog.logControlEvent('greenFlag', this.runtime);
        super.greenFlag();
    }

    /**
     * Overwrite stopAll to add log call.
     */
    stopAll () {
        ScratchLogSender.userEventLog.logControlEvent('stopAll', this.runtime);
        super.stopAll();
    }

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
