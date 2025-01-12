export default {
  value: {
    type: String,
    required: true
  },
  option: {
    type: String,
    enum: ["income", "expense"],
    required: true
  }
} as const
