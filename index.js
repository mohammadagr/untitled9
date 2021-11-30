function Movies(title, lastupdate, lastUpdateValue, IMDBRate, img, durationTime, durationTimeValue) {
    this.title = title;
    this.lastupdate = lastupdate;
    this.lastUpdateValue = lastUpdateValue;
    this.IMDBRate = IMDBRate;
    this.img = img;
    this.durationTime = durationTime;
    this.durationTimeValue = durationTimeValue
}

const MoviesInfo = []
MoviesInfo.push(new Movies('Avengers:Endgame', 'lastupdate', "Sunday, 25 Oct 1998", "8.8/10", 'image/avengers.jpg', "duration time", "3h,30min"))
MoviesInfo.push(new Movies('Hobbs & Shaws', 'lastupdate', "Friday, 27 Nov 2020", "9.2/10", 'image/hobs.jpg', "duration time", "2h,30min"))
MoviesInfo.push(new Movies('John Wick 3', 'lastupdate', "Sunday, 10 Sep 2020", "8.8/10", 'image/jon.jpg', "duration time", "2h,15min"))
MoviesInfo.push(new Movies('Deadpool 2', 'lastupdate', "Tuesday, 14 Feb 2019", "7.3/10", 'image/deadpool.jpg', "duration time", "2h,45min"))
MoviesInfo.push(new Movies('The Lion King', 'lastupdate', "Friday, 14 Feb 2019", "8.3/10", 'image/lion.jpg', "duration time", "1h,30min"))
MoviesInfo.push(new Movies('Mad Max: Fury road', 'lastupdate', "Monday, 27 May 2017", "7.4/10", 'image/madmax.jpg', "duration time", "4h,30min"))
MoviesInfo.push(new Movies('Aquaman', 'lastupdate', "Monday, 27 Jul 2011", "8.2/10", 'image/aqu.jpg', "duration time", "2h,05min"))
MoviesInfo.push(new Movies('Mission Impossible', 'lastupdate', "Sunday, 23 Nov 2014", "7.8/10", 'image/mission.jpg', "duration time", "2h,30min"))

const cardView = (cardInfo) => {
    return `
    <div className="card col-3">
        <div>
            <img 
            class="photo"
            alt=${cardInfo.title}
            src=${cardInfo.img}>
        </div>
        <div class="content">
        <div class="row">
        <div class="culumn">
        <p class="title">${cardInfo.title}</p>
        <p>${cardInfo.lastupdate}</p>
        <p>${cardInfo.lastUpdateValue}</p>
        </div>
        <div class="column">
        <p class="IMDBRate">${cardInfo.IMDBRate}</p>
        <p>${cardInfo.durationTime}</p>
        <p>${cardInfo.durationTimeValue}</p>
        </div>
        </div>
        </div>
    </div>                
    `
}

const cardGenerator = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    })
}

const cardContainer = document.getElementById("container")
cardContainer.innerHTML = cardGenerator(MoviesInfo)

function onSearch(element) {
    const searchTerm = element.value
    const filteredCard = MoviesInfo.filter(card => {
        return card.title.includes(searchTerm) || card.lastUpdateValue.includes(searchTerm)
    })
    cardContainer.innerHTML = cardGenerator(filteredCard)
}






