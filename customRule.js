// customRule.js

export default {
  meta: {
    type: 'suggestion', // Hoặc 'problem' nếu rule của bạn là lỗi
    docs: {
      description: 'Ensure correct order of Vue component blocks', // Mô tả rule của bạn
      category: 'vue', // Chuyên mục rule (ví dụ: vue, stylistic, possible-errors)
      recommended: false, // Có phải rule này là đề xuất mặc định của ESLint hay không
    },
    fixable: 'code', // Có thể sửa lỗi tự động hay không
    schema: [], // Không cần options cho rule này
  },

  create: function (context) {
    return {
      Program: function (node) {
        const sourceCode = context.getSourceCode()
        const templateTag = sourceCode.getText(node)

        if (templateTag.includes('<template>') && templateTag.includes('<style>')) {
          context.report({
            node,
            message: 'Ensure blocks are ordered as <script>, <template>, <style>.',
          })
        }
      },
    }
  },
}
