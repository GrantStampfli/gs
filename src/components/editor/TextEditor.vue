<template>
  <v-container>
    <div class="quill-editor">
      <slot name="toolbar"></slot>
      <div ref="editor"></div>
    </div>
  </v-container>
</template>
<script>
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.core.css'
import Quill from 'quill/dist/quill.js'

if (!window.Quill) {
  window.Quill = Quill
}

export default {
  name: 'TextEditor',
  props: {
    content: String,
    value: String,
    disabled: Boolean,
    options: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      _content: '',
      defaultModules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],
          ['link', 'image', 'video']
        ]
      }
    }
  },
  computed: {},
  watch: {
    content: function (newVal, oldVal) {
      if (this.quill) {
        if (!!newVal && newVal !== this._content) {
          this._content = newVal
          this.quill.pasteHTML(newVal)
        } else if (!newVal) {
          this.quill.setText('')
        }
      }
    },
    value: function (newVal, oldVal) {
      if (this.quill) {
        if (!!newVal && newVal !== this._content) {
          this._content = newVal
          this.quill.pasteHTML(newVal)
        } else if (!newVal) {
          this.quill.setText('')
        }
      }
    },
    disabled: function (newVal, oldVal) {
      if (this.quill) {
        this.quill.enable(!newVal)
      }
    }
  },
  methods: {
    initialize: function () {
      if (this.$el) {
        // options and instance
        var self = this
        self.options.theme = self.options.theme || 'snow'
        self.options.boundary = self.options.boundary || document.body
        self.options.modules = self.options.modules || self.defaultModules
        self.options.modules.toolbar = self.options.modules.toolbar !== undefined
          ? self.options.modules.toolbar
          : self.defaultModules.toolbar
        self.options.placeholder = self.options.placeholder || 'Insert text here ...'
        self.options.readOnly = self.options.readOnly !== undefined ? self.options.readOnly : false
        self.quill = new Quill(self.$refs.editor, self.options)
        // set editor content
        if (self.value || self.content) {
          self.quill.pasteHTML(self.value || self.content)
        }
        // mark model as touched if editor lost focus
        self.quill.on('selection-change', (range) => {
          if (!range) {
            self.$emit('blur', self.quill)
          } else {
            self.$emit('focus', self.quill)
          }
        })
        // update model if text changes
        self.quill.on('text-change', (delta, oldDelta, source) => {
          var html = self.$refs.editor.children[0].innerHTML
          var text = self.quill.getText()
          if (html === '<p><br></p>') html = ''
          self._content = html
          self.$emit('input', self._content)
          self.$emit('change', {
            editor: self.quill,
            html: html,
            text: text
          })
        })
        // disabled
        if (this.disabled) {
          this.quill.enable(false)
        }
        // emit ready
        self.$emit('ready', self.quill)
      }
    }
  },
  components: {},
  mounted () {
    this.initialize()
  },
  beforeDestroy () {
    this.quill = null
  }
}
</script>
<style lang="stylus" scoped>
.quill-editor img {
  max-width: 100%;
}
</style>
