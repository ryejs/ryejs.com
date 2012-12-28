fs             = require 'fs'
showdown       = require 'showdown'
showdown.table = require './extensions/table.js'
flour          = require 'flour'

get = (f)      -> fs.readFileSync(f).toString()
put = (f, str) -> fs.writeFileSync(f, str)

converter = new showdown.converter extensions: [showdown.table]
docs =
    get: (f) -> get "docs/#{f}.md"
    text: (f) -> (docs.get f).replace /{{(\w+?)\.md}}/g, (m, f) -> docs.text f
    html: (f) -> converter.makeHtml docs.text f

api = [
    'rye'
    'data'
    'query'
    'collection'
    'manipulation'
    'style'
    'event-emitter'
    'dom-event-emitter'
    'events'
    'touch-events'
    'util'
]

sections = (header) ->
    html = api.map((doc) ->
        "<section class=\"section-#{doc}\">#{docs.html doc}</section>"
    ).join "\n"

    section = []
    html.replace /<h(\d)\s*id="(\w+)">(.+)<\/h\1>/g, (match, weight, id, title) ->
        section[weight-1] = title.replace(/[^\w\@]/g, '').toLowerCase()
        id = section.slice(0, weight).join '-'
        header parseInt(weight, 10), id, title


task 'build:docs', ->
    menu = ''
    content = sections (weight, id, title) ->
        classAttr = ' class="module" ' if '@' in title
        link = "<a href=\"##{id}\"#{[classAttr]}>#{title}</a>"
        menu += "#{['', '  '][weight-1]}- #{link}\n" if weight <= 2
        return "<h#{weight} id=\"#{id}\">#{title}</h#{weight}>"

    menu = converter.makeHtml menu

    output = (get 'template/index.html')
        .replace('{{manifesto}}', docs.html 'manifesto')
        .replace('{{content}}', content)
        .replace('{{menu}}', menu)

    put 'index.html', output


task 'build:readme', ->
    content = ''
    sections (weight, id, title) ->
        if weight is 1
            content += "\n### #{title}\n"
        else
            content += "- [`#{title}`](http://ryejs.com##{id})\n"

    output = (get 'template/README.md')
        .replace('{{about}}', docs.get 'about')
        .replace('{{browsers}}', docs.html 'browsers')
        .replace('{{content}}', content)

    put 'README.md', output


task 'build:less', ->
    compile 'styles/base.less', 'styles/main.css'


task 'watch', ->
    invoke 'build:less'
    invoke 'build:docs'
    invoke 'build:readme'

    watch 'styles/', -> invoke 'build:less'
    watch [
        'docs/'
        'template/'
    ], -> 
        invoke 'build:docs'
        invoke 'build:readme'