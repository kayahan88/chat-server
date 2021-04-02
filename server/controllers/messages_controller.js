let messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages);
    },
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({
            id: id,
            text: text,
            time: time
        });
        res.status(200).send(messages);
        id++;
    },
    update: (req, res) => {
        const {id} = req.params;
        const {text} = req.body;
        let messageIndex = null;
        messages.forEach((elem, i) => {
            if(elem.id === +id){
                messageIndex = i;
            }
        });
        const updatedMessage = {
            id: id,
            text: text
        }
        messages.splice(messageIndex, 1, updatedMessage);
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const {id} = req.params;
        let messageIndex = null;
        messages.forEach((elem, i) => {
            if(elem.id === +id){
                messageIndex = i;
            }
        });
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}