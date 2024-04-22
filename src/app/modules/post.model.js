const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
      },
      avatar: {
        type: String,
      },
    },
    content: {
      type: String,
      required: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
