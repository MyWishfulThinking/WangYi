var searchTpl = '<li class="search-result-item" data-id={%id%}>' + 
'<p><strong>{%geming%}</strong></p>' +
'<p>{%geshou%} - 《{%zhuanji%}》</p>' +
'</li>'

var searchButton = document.getElementById('search-button')
var searchInput = document.getElementById('search')

var searchResultList = document.getElementById('search-result-list')

var addEventListener = function(){
    var d = document.getElementsByClassName('search-result-item')
    for(var i=0;i<d.length;i++){
        d[i].addEventListener('click',function(){
            play( parseInt(this.getAttribute('data-id')) ) //id : number
        })
    }
}

var fillSearchResult = function(arr){
    var html = ''
    for(var i=0;i<arr.length;i++){
        html += searchTpl.replace('{%geming%}',arr[i].name)
                   .replace('{%geshou%}',arr[i].artists[0].name)
                   .replace('{%zhuanji%}',arr[i].album.name)
                   .replace('{%id%}',arr[i].id)
    }
    searchResultList.innerHTML = html
    //等元素填充到HTML之后再去添加监听器
    addEventListener()
    showSearchResult()
}

searchButton.addEventListener('click',function(){
    var keywords = searchInput.value
    search(keywords,function(e){
        console.log(e)
        fillSearchResult(e)
    })
})

var searchResultWrap = document.getElementsByClassName('search-result-wrap')[0]
var showSearchResult = function(){
    searchResultWrap.className = 'search-result-wrap active'
}
var hideSearchResult = function(){
    searchResultWrap.className = 'search-result-wrap'
}