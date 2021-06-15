# youtubeclone
html
    <header>                                               - Youtube 최상단 디자인 
        <div class="logo">                     
            <i class="fab fa-youtube"></i>                 - icon을 이용해 디자인을 따라 만들었습니다
            <span class="title">Youtube</span>
        </div>
        <div class="icons">
            <i class="far fa-thumbs-up"></i>
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </header>
    
    <section class="player">
        <video controls src="video/Guitarist.mp4"></video> -video를 불러와 controls을 적용
    </section>
    
    <div class="metadata">
            <ul class="hashtages"></ul>                    - hashtages부분
            <div class="titleAndButton"> </div>            - title과 Button부분
            <div class="views"></div>                      - 시청기록을 확인하는 부분
    </div>

    <ul class="actions">                                   
            <li><button><i class="fas fa-thumbs-up"></i><span>1</span></button></li>    - 좋아요, 싫어요 버튼 부분 button에 icon을 적용해 icon이반응하게 제작
    </ul>
    
    <section class="UpNext"></section>      -관련 영상 부분 제작


css

    :root {     -root로 사용 할 값들을                                             
    /* Color */
    --white-color: #fff;
    --black-color: #140a00;
    --blue-color: #3b47f1;
    --red-color: #ff0000;
    --grey-dark-color: #909090;
    --grey-light-color: #e0e0e0;
    
    /* Size */

    --padding: 12px;
    --avatar-size: 40px;

    /* Font Size */
    --font-large: 18px;
    --font-medium: 14px;
    --font-small: 12px;
    --font-micro: 10px;}       

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Roboto;
}

ul {
    list-style: none;
}

button {
    border: none;
    cursor: pointer;
    outline: none;
}

/* Header */
header{
    display: flex;
    justify-content: space-between;
    padding: var(--padding);
    background-color: var(--black-color);
    color: var(--white-color);
}
 
header .logo{
    font-size: var(--font-large);
    font: bolder;
}

header .logo i {
    color: var(--red-color);
}

header .icons .fa-search {
    margin-right: var(--padding);
}


/* Video Player */
.player {
    position: sticky;
    top: 0;
    text-align: center;
    background-color: var(--black-color);
}

.player video {
    width: 100%;
    height: 100%;
    max-width: 1000px;
}

 body > .info {
    padding: var(--padding);
}

.info .metadata .hashtags {
    display: flex;
    font-size: var(--font-small);
    color: var(--blue-color);
}

.info .metadata .hashtags li {
    margin-right: var(--padding);
}

.info .metadata .titleAndButton {
    display: flex;
}

.info .metadata .titleAndButton .title {
    font-size: var(--font-medium);

    margin-right: var(--padding);
}

.info .metadata .titleAndButton .title.clamp {      -line clamp를 사용하여 1줄만 보이도록 제한
    display: -webkit-box;                               
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}       

.info .metadata .titleAndButton .moreBtn {      - 0.3초의 딜레이를 통한 애니매이션
    background-color: var(--white-color);
    height: 100%;
    transition: transform 300ms;                        
}       

.info .metadata .titleAndButton .moreBtn.clicked {      - More Button 아이콘 180도 회전
    transform: rotate(180deg);                          
}       

.info .views{
    font-size: var(--font-small);
    color: var(--grey-dark-color);
}

/* Action Buttons */
.info .actions {
    display: flex;
    justify-content: space-around;
    margin: var(--padding) 0;
}

.info .actions button {
    display: flex;
    flex-direction: column;
    font-size: var(--font-small);
    color: var(--grey-dark-color);
    background-color: var(--white-color);
}

.info .actions button i {
    margin: 0 auto;
    margin-bottom: calc(var(--padding) / 2);                
    font-size: 16px;
}       - calc을 사용해 지정값을 축소

.info .actions button i.active {
    color: var(--blue-color);
}

/* Channel Description */
.channel {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--grey-light-color);
    border-bottom: 1px solid var(--grey-light-color);
}
.info .channel button {
    background-color: var(--white-color);
}

.info .channel .metadata {
    display: flex;
    align-items: center;
}

.info .channel .metadata .info {
    display: flex;
    flex-direction: column;
}

.info .channel .metadata img {
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: 50%;
}

.info .channel .metadata .info .subscribers {
    font-size: var(--font-small);
    color: var(--grey-dark-color);
}

.info .channel .subscribe {
    text-transform: uppercase;
    color: var(--red-color);
    font-size: var(--font-medium);
}

/* Up Next */
.upNext{
    padding: 0 var(--padding);
}

.upNext > .title {
    font-size: var(--font-medium);
    color: var(--grey-dark-color);
    margin-bottom: calc(var(--padding) / 2);
}

.upNext .item {
    display: flex;
    margin-top: var(--padding);
}

.upNext .item .img {
    flex: 1 1 35%;
    margin-right: var(--padding);
}

.upNext .item .img img {
    width: 100%;
}

.upNext .item .info {
    flex: 1 1 35%;
}

.upNext .item .moreBtn {
    flex: 1 1 35%;
}

.upNext .item .info {
    display: flex;
    flex-direction: column;
}

.upNext .item .info .name,
.upNext .item .info .views {
    font-size: var(--font-micro);
    color: var(--grey-dark-color);
}

.infoAndUpNext{
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 800px) {                                          
    .infoAndUpNext {                                                             
        flex-direction: row;
        margin: var(--padding);
    }
}       - media query를 사용해 화면 크키 800px이상일때 Up Next가 오른쪽으로 넘어가게 제작


JavaScript

const moreBtn = document.querySelector('.info .metadata .moreBtn');             
const title = document.querySelector('.info .metadata .title');     - 변수 할당

moreBtn.addEventListener('click',() => {                                        
    moreBtn.classList.toggle('clicked');                                          
    title.classList.toggle('clamp');
});     - moreBtn이 click되는것을 확인해서 아래 두 조건을 toggle함

