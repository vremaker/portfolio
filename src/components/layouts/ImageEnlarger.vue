<template>
  <div class="image-enlarger">
    <!-- Thumbnail image -->
    <img
      :src="resolvedImageSrc"
      :alt="imageAlt"
      class="enlarger-thumbnail"
      @click="openFullscreen"
    />

    <!-- Fullscreen modal overlay -->
    <transition name="fade">
      <div
        v-if="isFullscreen"
        class="fullscreen-overlay"
        @click.self="closeFullscreen"
      >
        <button class="close-btn" @click="closeFullscreen" aria-label="Close fullscreen">
          ×
        </button>
        <div class="fullscreen-container" @click="closeFullscreen">
          <div class="image-with-caption">
            <img
              :src="resolvedImageSrc"
              :alt="imageAlt"
              class="fullscreen-image"
              @click.stop
            />
            <p v-if="caption" class="image-caption">{{ caption }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ImageEnlarger',
  props: {
    imageSrc: {
      type: [String, Object],
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Image'
    },
    caption: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isFullscreen: false
    };
  },
  computed: {
    resolvedImageSrc() {
      if (typeof this.imageSrc === 'string') {
        return this.imageSrc;
      }
      console.log(this.imageSrc)
      // Handle imported images
      return this.imageSrc.default || this.imageSrc;
    }
  },
  methods: {
    openFullscreen() {
      this.isFullscreen = true;
      document.body.style.overflow = 'hidden';
    },
    closeFullscreen() {
      this.isFullscreen = false;
      document.body.style.overflow = 'auto';
    },
    handleKeydown(event) {
      if (event.key === 'Escape' && this.isFullscreen) {
        this.closeFullscreen();
      }
    }
  },
  watch: {
    isFullscreen(newVal) {
      if (!newVal) {
        document.body.style.overflow = 'auto';
      }
    }
  },
  mounted() {
    // Listen for Escape key to close fullscreen
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = 'auto';
  }
};
</script>

<style scoped lang="scss">
.image-enlarger {
 // display: inline-block;
}

.enlarger-thumbnail {
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  //height: 20rem;
 
}

/* Make thumbnails responsive inside grid cells */
.enlarger-thumbnail {
  display: block;
  width: 100%;
  height: 309px;
  max-width: 100%;
  object-fit: cover; /* crop if necessary while preserving aspect */
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.fullscreen-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fullscreen-image {
  // max-width: 100%;
  // max-height: 80%;
  height: 60vh;
  object-fit: contain;
}

.image-with-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.image-caption {
  color: white;
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 0 20px;
  max-width: 90%;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 48px;
  color: white;
  cursor: pointer;
  padding: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  z-index: 1001;

  &:hover {
    transform: scale(1.2);
  }
}

// Fade transition animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
