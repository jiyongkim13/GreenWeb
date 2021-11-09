/*  웹 cover flow*/
(function() {

    // 변수
    var _index = 0,
    _coverflow = null,
    _prevLink = null,
    _nextLink = null,
    _albums = [],
    _transformName = Modernizr.prefixed('transform'),

    // 값
    OFFSET = 70; // 화소
    ROTATION = 45; // degrees
    BASE_ZINDEX = 10; // 
    MAX_ZINDEX = 42; // 

    /**
     * 선택지 가져오기
     **/
    function get( selector ) {
        return document.querySelector( selector );
    };

    /**
     * Renders the CoverFlow based on the current _index
     **/
    function render() {

        // 번복 하고 위치 변경
        for( var i = 0; i < _albums.length; i++ ) {
 
            // 이전
            if( i < _index ) {
                _albums[i].style[_transformName] = "translateX( -"+ ( OFFSET * ( _index - i  ) ) +"% ) rotateY( "+ ROTATION +"deg )";
                _albums[i].style.zIndex = BASE_ZINDEX + i;  
            } 

            // 현재
             if( i === _index ) {
                _albums[i].style[_transformName] = "rotateY( 0deg ) translateZ( 140px )";
                _albums[i].style.zIndex = MAX_ZINDEX;  
            } 

             // 다음
            if( i > _index ) {
                _albums[i].style[_transformName] = "translateX( "+ ( OFFSET * ( i - _index  ) ) +"% ) rotateY( -"+ ROTATION +"deg )";
                _albums[i].style.zIndex = BASE_ZINDEX + ( _albums.length - i  ); 
            }         
        
        }

    };

    /**
     * 오른쪽으로 이동
     **/
    function flowRight() {

       // check if has 화면
       // on the right side
       if( _index ) {
            _index--;
            render();
       }
      
    };

    /**
     * 왼쪽으로 이동
     **/
    function flowLeft() {

        // check if has 화면
       // on the left side
       if( _albums.length > ( _index + 1)  ) {
            _index++;
            render();
       }
      
    };

    /**
     * 우측 좌측 방향키로 키보드로 이동 가능 이벤트
     **/
    function keyDown( event ) {

        switch( event.keyCode ) {
            case 37: flowRight(); break; // 좌
            case 39: flowLeft(); break; // 우
        }

    };

    /**
     * Register all events 
     **/
    function registerEvents() {
        _prevLink.addEventListener('click', flowRight, false);
        _nextLink.addEventListener('click', flowLeft, false);
        document.addEventListener('keydown', keyDown, false);
    };

    /**
     * Initalize
     **/
    function init() {

        // get albums & set index on the album in the middle
        _albums = Array.prototype.slice.call( document.querySelectorAll( 'section' ));
        _index = Math.floor( _albums.length / 2 );

        // get dom stuff
        _coverflow = get('#coverflow');
        _prevLink = get('#prev');
        _nextLink = get('#next');

        // display covers
        for( var i = 0; i < _albums.length; i++ ) {
            var url = _albums[i].getAttribute("data-cover");
            _albums[i].style.backgroundImage = "url("+ url  +")";
        }

        // do important stuff
        registerEvents();
        render();

   };

    // go!
    init();

}());