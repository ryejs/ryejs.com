fs             = require 'fs'
showdown       = require 'showdown'
showdown.table = require './extensions/table.js'
flour          = require 'flour'

get = (f)      -> fs.readFileSync(f).toString()
put = (f, str) -> fs.writeFileSync(f, str)

docs = [
    'manifesto'
    'rye'
    'util'
    'data'
    'query'
    'collection'
    'manipulation'
    'style'
    'events'
    'dom-events'
    'touch-events'
]

task 'build:docs', ->
    converter = new showdown.converter extensions: [showdown.table]

    content = docs.map((doc) ->
        '<article><div class="wrapper">' + (converter.makeHtml get "docs/#{doc}.md") + '</div></article>'
    ).join "\n"

    menu = ''
    section = []
    content = content.replace /<h(\d)\s*id="(\w+)">(.+)<\/h\1>/g, (match, weight, id, title) ->
        section[weight-1] = id
        id = section.slice(0, weight).join '.'
        menu += "#{['', '  '][weight-1]}- [#{title}](##{id})\n" if weight <= 2
        return "<h#{weight} id=\"#{id}\">#{title}</h#{weight}>"
    menu = converter.makeHtml menu

    output = (get 'template/index.html')
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