// ajax communication variable
var urlRoot = 'http://vecrawl-xpitfire.rhcloud.com';

// dom manipulation variable
var $win = $(window),
    $navbar = $('.navbar');

// responsive view variables
var responsiveWidth = 768;
var $scrollWrapper = $('.scroll-top-wrapper'),
    $inputSearch = $('#vecrawl-input-search'),
    $autoCompleteView = $('#search-ac-view-container'),
    $autoComplete = $('#acp-content-wrap'),
    $clearSearchText = $('#clear-search-text-btn'),
    $navWelcText = $('#nav-welcome-text'),
    $navLoginMenu = $('#nav-login-menu');

$(function () {
    
    // =================================================================================
    // ### VIEW OPERATIONS
    // =================================================================================
    
    var resizeId = 0;
    $(window).resize(function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
        
        responsiveViewAjustment();
    });
    
    function doneResizing() {
    }

    function responsiveViewAjustment() {
        if ($win.width() < 1023) {
            $navWelcText.addClass('hidden');
        } else {
            $navWelcText.removeClass('hidden');
        }
        
        if ($win.width() < 850) {
            $navLoginMenu.addClass('hidden');
        } else {
            $navLoginMenu.removeClass('hidden');
        }
    }
    responsiveViewAjustment();
    
    // =================================================================================
    // ### VIDEO CONTROL
    // =================================================================================

    function addVideoEvent() {
        $('#search-video-result-content-box').on('click', 'a', function (e) {
            e.preventDefault();
            var that = $(this);
            
            $('#video-player-box').slideDown(function () {
                $('#video-player-box').empty();
                $('#close-video-box').show();
                
                var images = $(this).find('img');
                var image = '';
                if (images[0] != null)
                    image = 'img.first().attr("src")';
                var href = '';
                var arr = that.attr('href').split('?v=');
                if (arr[1] != null)
                    href = arr[1];
                var title = that.attr('title');
                
                var vStr = '';
                vStr += '<video id="a240e92d" class="sublime" poster="' + image + '"';
                vStr += 'title = "' + title + '"';
                vStr += 'data-embed-type="auto" data-uid="a240e92d" data-autoresize="fill" data-youtube-id="' + href + '" preload="none">';
                vStr += '<p>Sorry, your browser does not support video functionallity!</p></video>';
                $('#video-player-box').append(vStr);
                SublimeVideoLoader();
            });
            
            console.log(that.attr('href'));
        });
    }
    addVideoEvent();
    
    $('#close-video-box').click(function () {
        $('#video-player-box').empty();
        $('#video-player-box').slideUp();
        $('#close-video-box').hide();
    });

    // =================================================================================
    // ### INDEX PAGE EFFECT
    // =================================================================================
    
    function indexSearchSticky() {
        if ($('.index-content-wrapper')) {
            var contentOffset = $('.index-home-logo').height() + 160;
            $('#index-search-field').affix({
                offset: {
                    top: contentOffset
                }
            });
        }
    }
    setTimeout(indexSearchSticky, 400);

    // =================================================================================
    // ### LOGIN EFFECT
    // =================================================================================
    
    // log-in info message
    $('#signin-info').delay(3500).fadeOut(3000);
    
    // log-in / sign-up tab
    $('#login-tab a:last').on('click', function (e) {
        $(this).tab('show');
    });
    
    // =================================================================================
    // ### NAVIGATION BAR EFFECTS
    // =================================================================================
    
    // remove highlighting style from the current selected dropdown item
    function removeDropdownHighlight() {
        $('.highlight-dropdown').parent().removeClass('active');
        $('.highlight-dropdown').removeClass('highlight-dropdown');
    }
    
    var curNav = null;
    // nav filter dropdown
    $('#filter-web').on('click', function (e) {
        e.preventDefault();
        if (curNav !== 'filter-web') {
            removeDropdownHighlight();
            $(this).addClass('highlight-dropdown');
            $(this).parent().addClass('active');
            $('#filterType').val('filter-web');
            if (getURLParameter('search'))
                $('#vecrawl-form-search').submit();
            curNav = 'filter-web';
        }
    });
    $('#filter-img').on('click', function (e) {
        e.preventDefault();
        if (curNav !== 'filter-img') {
            removeDropdownHighlight();
            $(this).addClass('highlight-dropdown');
            $(this).parent().addClass('active');
            $('#filterType').val('filter-img');
            if (getURLParameter('search'))
                $('#vecrawl-form-search').submit();
            curNav = 'filter-img';
        }
    });
    $('#filter-video').on('click', function (e) {
        e.preventDefault();
        if (curNav !== 'filter-video') {
            removeDropdownHighlight();
            $(this).addClass('highlight-dropdown');
            $(this).parent().addClass('active');
            $('#filterType').val('filter-video');
            if (getURLParameter('search'))
                $('#vecrawl-form-search').submit();
            curNav = 'filter-video';
        }
    });
    
    // set search submit handler for search loop icon
    $('#search-result-btn').on('click', function (e) {
        e.preventDefault();
        $('#vecrawl-form-search').submit();
    });
    
    var ESCAPE_KEY = 27;
    var ENTER_KEY = 13;

    // set search submit handler for press enter event
    $inputSearch.keyup(function (e) {
        if (e.which == ESCAPE_KEY) {
            if ($inputSearch.is(':focus'))
                $autoCompleteView.addClass('hidden');
        }
    });

    // =================================================================================
    // ### HANDLE SEARCH REQUESTS
    // =================================================================================
    
    $('#vecrawl-form-search').on('submit', function (e) {
        if (Modernizr.history && window.location.pathname == '/' && getURLParameter('search')) {
            requestTriggered = true;
            acReady = false;
            var searchReq = $inputSearch.val();
            var highlighted = document.getElementsByClassName("highlight-dropdown");
            var filterReq = null;
            if (highlighted && highlighted.length > 0)
                filterReq = highlighted[0].id;

            if (searchReq) {
                if (!filterReq)
                    filterReq = 'filter-web';
                var historyUrl = urlRoot + '/?search=' + escape(searchReq) 
                + '&filterType=' + filterReq;
                var reqUrl = urlRoot + '/api/search?search=' + escape(searchReq) 
                + '&filterType=' + filterReq;

                $.ajax({
                    type: 'GET',
                    'url': reqUrl,
                    success: function (result) {
                        loadContent(result);
                        $('html, body').animate({
                            scrollTop: 0
                        }, 0);
                        $autoCompleteView.addClass('hidden');
                        if (!$('#menu-btn').hasClass('collapsed')) {
                            $('#menu-btn').click();
                        }
                        acReady = true;
                        
                        // HISTORY.PUSHSTATE
                        history.pushState({
                            data: result,
                            search: searchReq,
                            filterType: filterReq
                        }, historyUrl, historyUrl);
                    },
                    error: function () {
                        acReady = true;
                    }
                });
            }
            e.preventDefault();
        }
    });
    
    $clearSearchText.on('click', function () {
        $inputSearch.val('');
        $clearSearchText.addClass('hidden');
        $autoCompleteView.addClass('hidden');
        $inputSearch.focus();
    });
    
    // =================================================================================
    // ### HANDLE AUTOCOMPLETE REQUESTS
    // =================================================================================
    
    var acReady = true;
    $inputSearch.keyup(function (e) {
        var searchReq = $inputSearch.val();
        if (e.which != ENTER_KEY && e.which != ESCAPE_KEY && acReady && searchReq && searchReq.length >= 2) {
            acReady = false;
            var url = urlRoot + '/api/ac?ac=' + escape(searchReq);
            $.ajax({
                type: 'GET',
                'url': url,
                success: function (result) {
                    if (result.ac) {
                        var obj = result.ac;
                        $autoComplete.empty();
                        var resList = '';
                        for (var i = 0; i < obj.length; i++) {
                            resList += '<div class="acp" data-index="' + i + '">' + obj[i].phrase + '</div>';
                        }
                        $autoComplete.append(resList);
                        if ($autoComplete.children('.acp').length > 0)
                            $autoCompleteView.removeClass('hidden');
                        else
                            $autoCompleteView.addClass('hidden');
                    }
                    acReady = true;
                },
                error: function (err) {
                    acReady = true;
                }
            });
        } else if (e.which == ENTER_KEY || searchReq && searchReq.length < 2) {
            $autoCompleteView.addClass('hidden');
        }

        if (searchReq && searchReq.length > 0)
            $clearSearchText.removeClass('hidden');
    });
    
    $inputSearch.on('focusout', function () {
        var searchReq = $inputSearch.val();
        if (searchReq && searchReq.length <= 0)
            $clearSearchText.addClass('hidden');
        setTimeout(function () {
            $autoCompleteView.addClass('hidden');
        }, 300);
    });
    
    $inputSearch.on('focusin', function () {
        var searchReq = $inputSearch.val();
        if (searchReq && searchReq.length > 0)
            $clearSearchText.removeClass('hidden');
    });

    $autoComplete.on('click', '.acp', function () {
        $inputSearch.val($(this).html());
        $autoCompleteView.addClass('hidden');
    });

    
    // =================================================================================
    // ### HELPER FUNCTIONS
    // =================================================================================
    
    // Extract parameters from URI
    function getURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    
    // =================================================================================
    // ### RESPONSIVE VIEW HANDLING
    // =================================================================================
    
    // remove scroll to top button
    $win.resize(function () {
        windowsize = $win.width();
        if (windowsize < responsiveWidth) {
            $scrollWrapper.removeClass('show');
        } else if ($win.scrollTop() > 100) {
            $scrollWrapper.addClass('show');
        }
    });
    
    // =================================================================================
    // ### SCROLL EVENT HANDLING
    // =================================================================================
    
    // Click event to scroll to top
    function scrollToTop() {
        verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({ scrollTop: offsetTop }, 400, 'linear');
    }
    
    // Check to see if the window is top if not then display button
    $(document).on('scroll', function () {
        if ($win.scrollTop() > 100 && $win.width() >= responsiveWidth) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    $('.scroll-top-wrapper').on('click', scrollToTop);
    
    // =================================================================================
    // ### HISTORY CONTROL
    // =================================================================================
    
    // Handle search result view
    $win.on('load', function (e) {
        var searchText = getURLParameter('search');
        var filterType = getURLParameter('filterType');
        if (window.location.pathname == '/' && searchText && filterType) {
            updatePageState(searchText, filterType);

            // history first pushstate
            history.pushState({
                data: $('#main-content-wrapper').html(),
                search: getURLParameter('search'),
                filterType: getURLParameter('filterType')
            }, location.href, location.href);
        }
    });
        
    $(window).bind('popstate', function (event) {
        if (event.originalEvent.state) {
            event.preventDefault();
            loadContent(event.originalEvent.state.data);
            updatePageState(event.originalEvent.state.search, event.originalEvent.state.filterType);
        }
    })
    
    // set correct page state 
    function updatePageState(searchParam, filterParam) {
        // update search text information
        var searchText = null;
        if (searchParam) {
            searchText = searchParam;
        } else {
            searchText = getURLParameter('search');
        }

        if (searchText)
            $inputSearch.val(decodeURIComponent(searchText.replace(/\+/g, ' ')));

        // update filter type information
        var filterType = null;
        if (filterParam) {
            filterType = filterParam;
        } else {
            filterType = getURLParameter('filterType');
        }
        if (filterType) {
            removeDropdownHighlight();
            var $curFilterObj = $('#' + filterType);
            $curFilterObj.addClass('highlight-dropdown');
            $curFilterObj.parent().addClass('active');
            $('#filterType').val(filterType);
            curNav = filterType;
        }
        // show search clear button
        if (searchText && searchText.length > 0)
            $clearSearchText.removeClass('hidden');
    }
    
    // insert search results into page
    function loadContent(result) {
        $('#main-content-wrapper').empty();
        $('#main-content-wrapper').append(result);
        addVideoEvent();
    }

    function htmlDecode(value) {
        return $("<textarea/>").html(value).text();
    }
    
    function htmlEncode(value) {
        return $('<textarea/>').text(value).html();
    }

});