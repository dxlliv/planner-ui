export default {
  common: {
    action: {
      createProfile: 'Create profile',
      remove: 'Remove',
      reset: 'Reset',
      close: 'Close',
      create: 'Create',
      submit: 'Submit',
      post: 'Post',
    },
  },
  navigation: {
    home: 'Home',
    explore: 'Explore',
    support: 'Support',
    profile: 'Profile',
    save: 'Save',
  },
  profile: {
    stats: {
      posts: 'Posts',
      followers: 'Followers',
      follows: 'Following',
    },
    action: {
      editProfile: 'Edit profile',
      shareProfile: 'Share profile',
    },
    editor: {
      fields: {
        username: {
          name: "Username",
          label: "Username",
          placeholder: "username",
        },
        name: {
          name: "Name",
          label: "Name",
          placeholder: "Name",
        },
        website: {
          name: "Website",
          label: "Website",
          placeholder: "Website",
        },
        verified: {
          name: "Verified",
          placeholder: "Verified",
        },
        biography: {
          name: "Bio",
          label: "Bio",
          placeholder: "Bio",
        },
        avatar: {
          name: "Avatar",
          label: "Avatar",
          placeholder: "Avatar",
        },
        followers_count: {
          name: "Followers",
          label: "Followers",
          placeholder: "Followers",
        },
        follows_count: {
          name: "Follows",
          label: "Follows",
          placeholder: "Follows",
        }
      }
    },
    post: {
      comment: {
        add: "Add a comment...",
        list: {
          empty: "No comments here.",
        }
      }
    },
    media: {
      add: {
        title: "Create new post",
        subtitle: "Drag photos and videos here",
        action: "Select files"
      },
      menu: {
        addCover: "Add cover",
        addToAlbum: "Add media",
        cloneToReel: "Clone to reel",
        convertToAlbum: "Convert to album",
        convertToIframe: "Convert to iframe",
        remove: "Remove",
        removeCover: "Remove cover",
        removeFromAlbum: "Remove media",
        replaceCover: "Replace cover",
        replaceMedia: "Replace media",
      }
    },
  },
  $vuetify: {
    datePicker: {
      title: 'Select date'
    }
  }
}