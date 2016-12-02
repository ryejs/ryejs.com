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


api_sections = (header) ->
    html = API.map((id) ->
        """<section class="section-#{id}">#{docs.html id}</section>"""
    ).join "\n"

    section = []
    html = html.replace /<h(\d)\s*id="(\w+)">(.+)<\/h\1>/g, (match, weight, id, title) ->
        section[weight-1] = title.replace(/[^\w\@]/g, '').toLowerCase()
        id = section.slice(0, weight).join '-'
        header parseInt(weight, 10), id, title

    html = html.replace /⤳.*$/gm, (m) -> "<span>#{m}</span>"
    return html

# Config
# ===========

VERSION = require('./package.json').version;

API = [
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
    'request'
    'util'
]

SAMPLES = [
    'custom-dom-event-emitter'
    'touch-events'
]


# Builds
# ===========

task 'build:docs', ->
    menu = ''
    content = api_sections (weight, id, title) ->
        classAttr = ' class="module" ' if '@' in title
        link = """<a href="##{id}"#{[classAttr]}>#{title}</a>"""
        menu += "#{['', '  '][weight-1]}- #{link}\n" if weight <= 2
        return """<h#{weight} id="#{id}">#{title}</h#{weight}>"""

    menu = converter.makeHtml menu

    output = (get 'template/index.html')
        .replace('{{manifesto}}', docs.html 'manifesto')
        .replace('{{content}}', content)
        .replace('{{menu}}', menu)
        .replace(/{{version}}/g, VERSION)

    put 'index.html', output


task 'build:readme', ->
    content = ''
    api_sections (weight, id, title) ->
        if weight is 1
            content += "\n### #{title}\n"
        else
            content += "- [`#{title}`](http://ryejs.com##{id})\n"

    output = (get 'template/README.md')
        .replace('{{about}}', docs.get 'about')
        .replace('{{browsers}}', docs.get 'browsers')
        .replace('{{content}}', content)
        .replace(/{{version}}/g, VERSION)

    put 'README.md', output


task 'build:samples', ->
    menu = """
        - [Documentation](../)
        - [Samples](#)
    """ + "\n"

    content = SAMPLES.map((id) ->
        html = get "samples/#{id}.html"
        html = html.replace /<h1[^>]*>(.+)<\/h1>/, (match, title) ->
            menu += "   - [#{title}](##{id})\n"
            """<h1 id="#{id}">#{title}</h1>"""
        """<section class="section-#{id}">#{html}</section>"""
    ).join "\n"

    menu = converter.makeHtml menu

    output = (get 'template/samples.html')
        .replace('{{content}}', content)
        .replace('{{menu}}', menu)
        .replace(/{{version}}/g, VERSION)

    put 'samples/index.html', output


task 'build:less', ->
    compile 'styles/base.less', 'styles/main.css'


# Build and watch
# ===========

task 'build', ->
    invoke 'build:less'
    invoke 'build:docs'
    invoke 'build:readme'
    invoke 'build:samples'


task 'watch', ->
    invoke 'build'

    watch 'styles/', -> invoke 'build:less'
    watch [
        'docs/'
        'template/'
    ], -> 
        invoke 'build:docs'
        invoke 'build:readme'

    watch 'samples/', -> invoke 'build:samples'