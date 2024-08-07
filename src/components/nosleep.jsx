let noSleep = null
let video = null


// --- Public ---

export function activate() {
    if (!noSleep) noSleep = new NoSleep()
}

export function deactivate() {
    if (noSleep) {
        noSleep.stop()
        noSleep = null
    }
}


// --- Private ---

class NoSleep {
    constructor() {
        this._noSleep = true
        this._keepAwake()
    }

    stop() {
        this._noSleep = false
    }

    async _keepAwake() {

        while(this._noSleep) {
            if (video) video.play()
            console.log("Played");
            await wait(10000)
        }
    }
}

window.addEventListener("click", function enable() {
    window.removeEventListener("click", enable)

    // Initialize video element
    video = document.createElement("video")
    video.setAttribute("playsinline", "")


    // Add mp4 source
    let source = document.createElement("source")
    source.src = mp4Src
    source.type = "video/mp4"
    video.append(source)

    // Add webm source
    source = document.createElement("source")
    source.src = webmSrc
    source.type = "video/webm"
    video.append(source)

    // Play it as a result of user interaction
    video.play()
    document.body.appendChild(video);
    console.log("Activated keep alive");
    activate()
})

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const mp4Src = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAyBtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAGwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACSnRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAGwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAABoAAAgAAAEAAAAAAcJtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAEgFXEAAAAAAAxaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAENvcmUgTWVkaWEgQXVkaW8AAAABaW1pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABLXN0YmwAAAB7c3RzZAAAAAAAAAABAAAAa21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAACsRAAAAAAAM2VzZHMAAAAAA4CAgCIAAQAEgICAFEAVAAAAAAJ/9wACf/cFgICAAhIQBoCAgAECAAAAFGJ0cnQAAAAAAAJ/9wACf/cAAAAgc3R0cwAAAAAAAAACAAAAAwAABAAAAAABAAAAgAAAABxzdHNjAAAAAAAAAAEAAAABAAAABAAAAAEAAAAkc3RzegAAAAAAAAAAAAAABAAAAXMAAAF0AAABcwAAAXQAAAAUc3RjbwAAAAAAAAABAAADTAAAABpzZ3BkAQAAAHJvbGwAAAACAAAAAf//AAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAEAAAAAQAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTguNzYuMTAwAAAACGZyZWUAAAXWbWRhdCERRQAUUAFG//EKWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaXemCFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8IRFFABRQAUb/8QpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpd6aIUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8IRFFABRQAUb/8QpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpd6YIUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLwhEUUAFFABRv/xClpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWl3pohS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLw="

const webmSrc = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAANXEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggE/TbuMU6uEHFO7a1OsggNB7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNTguNzYuMTAwV0GNTGF2ZjU4Ljc2LjEwMESJiEBBAAAAAAAAFlSua+KuAQAAAAAAAFnXgQFzxYjHh4Jmxpm3C5yBACK1nIN1bmSGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BArWIQOdwAAAAAABiZIEYY6KTT3B1c0hlYWQBAjgBgLsAAAAAABJUw2dB03NzAQAAAAAAAQ5jwIBnyAEAAAAAAAAVRaOLTUFKT1JfQlJBTkREh4RxdCAgZ8gBAAAAAAAAFEWjjU1JTk9SX1ZFUlNJT05Eh4EwZ8gBAAAAAAAAG0WjkUNPTVBBVElCTEVfQlJBTkRTRIeEcXQgIGfIAQAAAAAAABlFo4hUSU1FQ09ERUSHizAwOjAwOjAwOjAwZ8gBAAAAAAAAKkWjn0NPTS5BUFBMRS5RVUlDS1RJTUUuRElTUExBWU5BTUVEh4VlbXB0eWfIAQAAAAAAACRFo5lDT00uQVBQTEUuUVVJQ0tUSU1FLlRJVExFRIeFZW1wdHlnyAEAAAAAAAAaRaOHRU5DT0RFUkSHjUxhdmY1OC43Ni4xMDBzcwEAAAAAAACxY8CLY8WIx4eCZsaZtwtnyAEAAAAAAAAiRaOMSEFORExFUl9OQU1FRIeQQ29yZSBNZWRpYSBBdWRpb2fIAQAAAAAAABtFo4lWRU5ET1JfSUREh4xbMF1bMF1bMF1bMF1nyAEAAAAAAAAjRaOHRU5DT0RFUkSHlkxhdmM1OC4xMzQuMTAwIGxpYm9wdXNnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjAzNDAwMDAwMAAAH0O2daTngQCjh4EAAID8//6gAQAAAAAAAA+hh4EAFQD8//51ooNwiJgcU7trkbuPs4EAt4r3gQHxggMY8IED"
