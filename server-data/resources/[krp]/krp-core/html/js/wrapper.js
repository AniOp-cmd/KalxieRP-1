(() => {

	let KRPCoreWrapper = {};
	KRPCoreWrapper.MessageSize = 1024;
	KRPCoreWrapper.messageId = 0;

	window.SendMessage = function (namespace, type, msg) {

		KRPCoreWrapper.messageId = (KRPCoreWrapper.messageId < 65535) ? KRPCoreWrapper.messageId + 1 : 0;
		const str = JSON.stringify(msg);

		for (let i = 0; i < str.length; i++) {

			let count = 0;
			let chunk = '';

			while (count < KRPCoreWrapper.MessageSize && i < str.length) {

				chunk += str[i];

				count++;
				i++;
			}

			i--;

			const data = {
				__type: type,
				id: KRPCoreWrapper.messageId,
				chunk: chunk
			}

			if (i == str.length - 1)
				data.end = true;

			$.post('http://' + namespace + '/__chunk', JSON.stringify(data));

		}

	}

})()
