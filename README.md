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
            <li>         
                <button><i class="fas fa-thumbs-up"></i><span>1</span></button>     - 좋아요, 싫어요 버튼 부분 button에 icon을 적용해 icon이반응하게 제작
            </li>   
    </ul>
    
    <section class="UpNext"></section>      -관련 영상 부분 제작


css

    :root {}    -root로 사용 할 값들을 지정                                            

 
    display: -webkit-box;                        -line clamp를 사용하여 1줄만 보이도록 제한       
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
     
    transition: transform 300ms;        - 0.3초의 딜레이를 통한 애니매이션   
 
    transform: rotate(180deg);       - More Button 아이콘 180도 회전

    margin-bottom: calc(var(--padding) / 2);        - calc을 사용해 지정값을 축소


    media query
    - 화면 크키 800px이상일때 Up Next가 오른쪽으로 넘어가게 제작


    JavaScript
    - moreBtn이 click되는것을 확인해서 아래 두 조건을 toggle함

    이후 수정사항
    - 최근 YOUTUBE사이트를 참고해 Up Next가 오른쪽에 일정한 공간을 차지하게 수정, 댓글 title 
    - 좋아요 버튼 누를때 파란색으로 바뀌게 수정, 댓글 title 및 정렬기준 글씨 크기와 배열 수정
