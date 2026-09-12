class EmailSender{
    send(message){
        console.log(`Sending Email: ${message}`)
    }
}

class SmsSender{
    send(message){
        console.log(`Sending Sms: ${message}`)
    }
}


class EmailFormatter{
    format(message){
        return `[Email]: ${message}`
    }
}

class SmsFormatter{
    format(message){
        return `[Sms]: ${message}`
    }
}

//JavaScript doesn't have abstract classes. so we simply define the expected methods.
class NotificationFactory {
    createSender() {}

    createFormatter() {}
}

class EmailFactory extends NotificationFactory {
    createSender(){
        return new EmailSender()
    }

    createFormatter() {
        return new EmailFormatter();
    }
}

class SmsFactory extends NotificationFactory{
    createSender() {
        return new SmsSender();
    }

    createFormatter() {
        return new SmsFormatter();
    }
}

class NotificationService{
    constructor(factory){
        this.sender = factory.createSender()
        this.formatter = factory.createFormatter()
    }

    notify(message){
        const formatted = this.formatter.format(message)
        this.sender.send(formatted)
    }
}

const emailService = new NotificationService(new EmailFactory())
emailService.notify("Welcome!")

const smsService = new NotificationService(new SmsFactory)
smsService.notify("Your OTP is 251454")


//-------------------------------**************************-------------------




class WindowButton{
    render(){
        console.log("Render Button")
    }
}

class WindowInput{
    render(){
        console.log("Render Input")
    }
}

class windowUi {
    createButton(){}
    createInput(){}
}

class WindowFactory extends windowUi{
    createButton(){
        return new WindowButton()
    }

    createInput(){
        return new WindowInput()
    }
}

class renderService {
    constructor(ui){
        this.button = ui.createButton()
        this.input = ui.createInput()
    }
    show(){
        this.button.render()
        this.input.render()
    }
}

const render = new renderService(new WindowFactory())
render.show()

// class WindowFactory{
//     constructor(){

//     }
// }

