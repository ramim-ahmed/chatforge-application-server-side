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
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
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
