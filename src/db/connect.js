class connectDB{
    constructor(url, object){
        this.url = url
        this.object = object
    }

    async connectDatabase(){
        let datajson = {}
        let object = {
            err: false,
            msg: datajson
        }

        try {
            await fetch(this.url)
            .then(data => {
                return data.json()
            })
            .then(data => {
                object.msg = data
            })
            .catch(error => {
                object.err = true
                object.msg = error
            })
        } catch (error) {
            object.err = true
            object.msg = error
        }

        return object
    }
}

export {
    connectDB
}