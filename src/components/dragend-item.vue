<template>
  <ul class="box" @dragstart="onDragStart" @dragover="onDragOver" @dragend="onDragEnd" ref="parentNode">
    <slot name="onSlotName">
      
    </slot>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6],
      draging: null, //被拖拽的对象
      target: null //目标对象
    };
  },
  mounted() {
    //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
    document.body.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  methods: {
    onDragStart(event) {
      console.log("drag start");
      this.draging = event.target;
    },
    onDragOver(event) {
      console.log("drag move");
      this.target = event.target;
      let targetTop = event.target.getBoundingClientRect().top;
      let dragingTop = this.draging.getBoundingClientRect().top;
      if (this.target.nodeName === "LI" && this.target !== this.draging) {
        if (this.target) {
          if (this.target.animated) {
            return;
          }
        }

        if (this._index(this.draging) < this._index(this.target)) {
          this.target.parentNode.insertBefore(
            this.draging,
            this.target.nextSibling
          );
        } else {
          this.target.parentNode.insertBefore(this.draging, this.target);
        }
        this._anim(targetTop, this.target);
        this._anim(dragingTop, this.draging);
      }
    },
    _anim(startPos, dom) {
      let offset = startPos - dom.getBoundingClientRect().top;
      dom.style.transition = "none";
      dom.style.transform = `translateY(${offset}px)`;

      //触发重绘
      dom.offsetWidth;
      dom.style.transition = "transform .3s";
      dom.style.transform = ``;

      //触发重绘
      // setTimeout(()=>{
      //     dom.style.transition="transform .3s";
      //     dom.style.transform=``;
      // },0)

      clearTimeout(dom.animated);

      dom.animated = setTimeout(() => {
        dom.style.transition = "";
        dom.style.transform = ``;
        dom.animated = false;
      }, 300);
    },
    onDragEnd(event) {
      console.log("drag end");
      let currentNodes = Array.from(this.$refs.parentNode.childNodes);

      let data = currentNodes.map((i, index) => {
        return i.innerText;
      });
      console.log(data);
    },
    _index(el) {
      let domData = Array.from(this.$refs.parentNode.childNodes);
      return domData.findIndex(i => i.innerText == el.innerText);
    }
  }
};
</script>

<style scoped>
.box {
  width: 500px;
  list-style: none;
  padding-bottom: 20px;
}
</style>
