fs             = require 'fs'
showdown       = require 'showdown'
showdown.table = require './extensions/table.js'
flour          = require 'flour'

get = (f)      -> fs.readFileSync(f).toString()
put = (f, str) -> fs.writeFileSync(f, str)

docs = [
    'rye'
    'data'
    'query'
    'collection'
    'manipulation'
    'style'
    'events'
    'dom-events'
    'touch-events'
    'util'
]

task 'build:docs', ->
    converter = new showdown.converter extensions: [showdown.table]

    intro = converter.makeHtml get 'docs/manifesto.md'

    content = docs.map((doc) ->
        "<section class=\"section-#{doc}\">#{converter.makeHtml get "docs/#{doc}.md"}</section>"
    ).join "\n"

    menu = ''
    section = []
    content = content.replace /<h(\d)\s*id="(\w+)">(.+)<\/h\1>/g, (match, weight, id, title) ->
        section[weight-1] = title.replace(/[^\w\@]/g, '').toLowerCase()
        id = section.slice(0, weight).join '-'
        menu += "#{['', '  '][weight-1]}- [#{title}](##{id})\n" if weight <= 2
        return "<h#{weight} id=\"#{id}\">#{title}</h#{weight}>"

    menu = converter.makeHtml menu

    output = (get 'template/index.html')
        .replace('{{intro}}', intro)
        .replace('{{content}}', content)
        .replace('{{menu}}', menu)

    put 'index.html', output
    
task 'build:less', ->
    compile 'styles/base.less', 'styles/main.css'

task 'watch', ->
    invoke 'build:less'
    invoke 'build:docs'

    watch 'styles/', -> invoke 'build:less'
    watch [
        'docs/'
        'template/'
    ], -> invoke 'build:docs'