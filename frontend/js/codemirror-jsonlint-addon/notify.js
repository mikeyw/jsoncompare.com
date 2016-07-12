import CodeMirror from 'codemirror';


CodeMirror.defineExtension('notify', function notify(state, message) {
	const { notifierBlock, validateButton } = this.display;

	if (!notifierBlock || !validateButton) return;

	switch (state) {
		case 'SUCCESS':
			notifierBlock.classList.remove('shown');
			validateButton.classList.add('success');
			break;
		case 'ERROR':
			notifierBlock.innerHTML = message;
			notifierBlock.classList.add('shown');
			validateButton.classList.remove('success');
			break;
		default:
			notifierBlock.classList.remove('shown');
			validateButton.classList.remove('success');
	}
});