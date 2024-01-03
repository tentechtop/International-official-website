<template>
  <div class="container">
    <nav-header :title="$t('foot.supportedModule')"></nav-header>
    <div class="comprehensive">
      <div class="comprehensive-container">
        <div class="container-title">{{ $t("foot.supportedModule") }}</div>
        <div class="module-filter-container">
          <div v-for="(menus,MIndex) in menuList" class="menu-item-container">
            <div v-for="(mItem,SubIndex) in menus" class="menu-item"
                 @mouseover="mItem.isHover=true"
                 @mouseleave="mItem.isHover=false"
                 @click="selectMenu(MIndex,SubIndex,menus,mItem)"
                 :class="{itemIsSelected:mItem.isSelected,}">
              <p>{{mItem.tagTitle}}</p>
            </div>
          </div>
        </div>
        <div class="module-list-box">
          <div v-for="(item, index) in filteredPVModuleList" :key="index" class="module-wrapper">
            <img :src="item.moduleImgUrl">
            <p v-if="showModuleName">{{item.PVModuleName}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n()

const filterTagList = ref([])
const filterTagMap = ref(new Map())
const PVModuleList = ref([
  {
    PVModuleId:1,
    PVModuleName:"Full 2BB 156mm 60PCS",
    tags:[1,5,12,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/01-FULL_2BB_156mm_60PCS.png",
  },
  {
    PVModuleId:2,
    PVModuleName:"Full 3BB 156mm 60PCS",
    tags:[1,6,12,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/02-FULL_3BB_156mm_60PCS.png",
  },
  {
    PVModuleId:3,
    PVModuleName:"Full 4BB 156mm 60PCS",
    tags:[1,7,12,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/03-FULL_4BB_156mm_60PCS.png",
  },
  {
    PVModuleId:4,
    PVModuleName:"Full 5BB 156mm 60PCS",
    tags:[1,8,12,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/04-FULL_5BB_156mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Full 6BB 156mm 60PCS",
    tags:[1,9,12,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/05-FULL_6BB_156mm_60PCS.png",
  },

  {
    PVModuleId:5,
    PVModuleName:"Full 3BB 156mm 72PCS",
    tags:[1,6,12,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/06-FULL_3BB_156mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Full 4BB 156mm 72PCS",
    tags:[1,7,12,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/07-FULL_4BB_156mm_72PCS.png",
  },

  {
    PVModuleId:5,
    PVModuleName:"Full 5BB 156mm 72PCS",
    tags:[1,8,12,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/08-FULL_5BB_156mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Full 6BB 156mm 72PCS",
    tags:[1,9,12,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/09-FULL_6BB_156mm_72PCS.png",
  },

  {
    PVModuleId:5,
    PVModuleName:"Full 0BB 125mm 96PCS",
    tags:[1,4,11,26],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/10-FULL_0BB_125mm_96PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 3BB 158mm 60PCS",
    tags:[2,6,13,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/11-HALF_3BB_158mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 4BB 158mm 60PCS",
    tags:[2,7,13,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/12-HALF_4BB_158mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 5BB 158mm 60PCS",
    tags:[2,8,13,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/13-HALF_5BB_158mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 6BB 158mm 60PCS",
    tags:[2,9,13,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/14-HALF_6BB_158mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"",
    tags:[2,6,13,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/15-HALF_3BB_158mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 3BB 158mm 72PCS",
    tags:[2,7,13,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/16-HALF_4BB_158mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 4BB 158mm 72PCS",
    tags:[2,8,13,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/17-HALF_5BB_158mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"Half 5BB 158mm 72PCS",
    tags:[2,9,13,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/18-HALF_6BB_158mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 162mm 60PCS",
    tags:[2,10,14,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/19-HALF_MBB_162mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 162mm 72PCS",
    tags:[2,10,14,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/20-HALF_MBB_162mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 166mm 60PCS",
    tags:[2,10,15,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/21-HALF_MBB_166mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 166mm 72PCS",
    tags:[2,10,15,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/22-HALF_MBB_166mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 182mm 60PCS",
    tags:[2,10,16,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/23-HALF_MBB_182mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 182mm 72PCS",
    tags:[2,10,16,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/24-HALF_MBB_182mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 182mm 54PCS",
    tags:[2,10,16,20],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/27-HALF_MBB_182mm_54PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 182mm 66PCS",
    tags:[2,10,16,23],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/28-HALF_MBB_182mm_66PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 182mm 78PCS",
    tags:[2,10,16,25],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/29-HALF_MBB_182mm_78PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 60PCS",
    tags:[2,10,17,22],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/25-HALF_MBB_210mm_60PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 72PCS",
    tags:[2,10,17,24],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/26-HALF_MBB_210mm_72PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 45PCS",
    tags:[2,10,17,18],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/31-HALF_MBB_210mm_45PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 54CS",
    tags:[2,10,17,20],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/32-HALF_MBB_210mm_54PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 54CS",
    tags:[2,10,17,23],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/33-HALF_MBB_210mm_66PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"半片 MBB 210mm 55CS",
    tags:[2,10,17,21],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/34-HALF_MBB_210mm_55PCS.png",
  },
  {
    PVModuleId:5,
    PVModuleName:"三分片 MBB 210mm 50CS",
    tags:[3,10,17,19],
    moduleImgUrl:"https://file.kwunphi.com/kwunphi/images/pvmodule/30-ONE-THIRD_MBB_210mm_50PCS.png",
  },
])
const tagList = ref([
  {
    tagTitle:t("pvModule.type.FULL"),
    tagName:"FULL",
    tagValue:1,
  },
  {
    tagTitle:t("pvModule.type.HALF"),
    tagName:"HALF",
    tagValue:2,
  },
  {
    tagTitle:t("pvModule.type.ONE_THIRD"),
    tagName:"ONE-THIRD",
    tagValue:3,
  },
  {
    tagTitle:"0BB",
    tagName:"0BB",
    tagValue:4,
  },
  {
    tagTitle:"2BB",
    tagName:"2BB",
    tagValue:5,
  },
  {
    tagTitle:"3BB",
    tagName:"3BB",
    tagValue:6,
  },
  {
    tagTitle:"4BB",
    tagName:"4BB",
    tagValue:7,
  },
  {
    tagTitle:"5BB",
    tagName:"5BB",
    tagValue:8,
  },
  {
    tagTitle:"6BB",
    tagName:"6BB",
    tagValue:9,
  },
  {
    tagTitle:"MBB",
    tagName:"MBB",
    tagValue:10,
  },
  {
    tagTitle:"125mm",
    tagName:"125mm",
    tagValue:11,
  },
  {
    tagTitle:"156mm",
    tagName:"156mm",
    tagValue:12,
  },
  {
    tagTitle:"158mm",
    tagName:"158mm",
    tagValue:13,
  },
  {
    tagTitle:"162mm",
    tagName:"162mm",
    tagValue:14,
  },
  {
    tagTitle:"166mm",
    tagName:"166mm",
    tagValue:15,
  },
  {
    tagTitle:"182mm",
    tagName:"182mm",
    tagValue:16,
  },
  {
    tagTitle:"210mm",
    tagName:"210mm",
    tagValue:17,
  },
  {
    tagTitle:"45PCS",
    tagName:"45PCS",
    tagValue:18,
  },
  {
    tagTitle:"50PCS",
    tagName:"50PCS",
    tagValue:19,
  },
  {
    tagTitle:"54PCS",
    tagName:"54PCS",
    tagValue:20,
  },
  {
    tagTitle:"55PCS",
    tagName:"55PCS",
    tagValue:21,
  },
  {
    tagTitle:"60PCS",
    tagName:"60PCS",
    tagValue:22,
  },
  {
    tagTitle:"66PCS",
    tagName:"66PCS",
    tagValue:23,
  },
  {
    tagTitle:"72PCS",
    tagName:"72PCS",
    tagValue:24,
  },
  {
    tagTitle:"78PCS",
    tagName:"78PCS",
    tagValue:25,
  },
  {
    tagTitle:"96PCS",
    tagName:"96PCS",
    tagValue:26,
  },
])
const picMaxWidth = ref(0)
const menuList = ref([
  [
      {
        tagTitle:t("certificate.all"),
        tagName:"ALL",
        tagValue:0,
        isSelected:true,
        isHover:true,
      },
      {
        tagTitle:t("pvModule.type.FULL"),
        tagName:"FULL",
        tagValue:1,
        isSelected:false,
        isHover:false,
      },
      {
        tagTitle:t("pvModule.type.HALF"),
        tagName:"HALF",
        tagValue:2,
        isSelected:false,
        isHover:false,
      },
      {
        tagTitle:t("pvModule.type.ONE_THIRD"),
        tagName:"ONE-THIRD",
        tagValue:3,
        isSelected:false,
        isHover:false,
      },
    ],
  [
    {
      tagTitle:t("certificate.all"),
      tagName:"ALL",
      tagValue:0,
      isSelected:true,
      isHover:true,
    },
    {
      tagTitle:"0BB",
      tagName:"0BB",
      tagValue:4,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"2BB",
      tagName:"2BB",
      tagValue:5,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"3BB",
      tagName:"3BB",
      tagValue:6,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"4BB",
      tagName:"4BB",
      tagValue:7,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"5BB",
      tagName:"5BB",
      tagValue:8,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"6BB",
      tagName:"6BB",
      tagValue:9,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"MBB",
      tagName:"MBB",
      tagValue:10,
      isSelected:false,
      isHover:false,
    },
  ],
  [
    {
      tagTitle:t("certificate.all"),
      tagName:"ALL",
      tagValue:0,
      isSelected:true,
      isHover:true,
    },
    {
      tagTitle:"125mm",
      tagName:"125mm",
      tagValue:11,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"156mm",
      tagName:"156mm",
      tagValue:12,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"158mm",
      tagName:"158mm",
      tagValue:13,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"162mm",
      tagName:"162mm",
      tagValue:14,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"166mm",
      tagName:"166mm",
      tagValue:15,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"182mm",
      tagName:"182mm",
      tagValue:16,
    },
    {
      tagTitle:"210mm",
      tagName:"210mm",
      tagValue:17,
      isSelected:false,
      isHover:false,
    },
  ],
  [
    {
      tagTitle:t("certificate.all"),
      tagName:"ALL",
      tagValue:0,
      isSelected:true,
      isHover:true,
    },
    {
      tagTitle:"45PCS",
      tagName:"45PCS",
      tagValue:18,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"50PCS",
      tagName:"50PCS",
      tagValue:19,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"54PCS",
      tagName:"54PCS",
      tagValue:20,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"55PCS",
      tagName:"55PCS",
      tagValue:21,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"60PCS",
      tagName:"60PCS",
      tagValue:22,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"66PCS",
      tagName:"66PCS",
      tagValue:23,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"72PCS",
      tagName:"72PCS",
      tagValue:24,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"78PCS",
      tagName:"78PCS",
      tagValue:25,
      isSelected:false,
      isHover:false,
    },
    {
      tagTitle:"96PCS",
      tagName:"96PCS",
      tagValue:26,
      isSelected:false,
      isHover:false,
    },
  ]
])
const tagsMap = ref(new Map())
const showModuleName = ref(false)
function initMenuList(){
  tagList.value.forEach((tag)=>{
    tagsMap.value.set(tag.tagValue,tag)
  })
}


watch(filterTagList,(newVal)=>{


})

const filteredPVModuleList = computed(() => {
  return PVModuleList.value.filter(module => {
    // 如果 tags 数组中包含 filterTagList 中的任意一个元素，就保留该模块
    /*      return module.tags.some(tag => filterTagList.value.includes(tag));*/
    return filterTagList.value.every((tag) => module.tags.includes(tag));
  });
});

function initFilterProduct() {


}

onUpdated(()=>{


})



function selectMenu(MIndex,SubIndex,menus,mItem){
  //menuList
  const temp = mItem.isSelected

  menuList.value[MIndex].forEach((M)=>{
    M.isSelected = false
  })
  mItem.isSelected = true
  if (mItem.tagValue!==0){
    filterTagMap.value.set(MIndex,mItem.tagValue)
  }else {
    filterTagMap.value.delete(MIndex)
  }
  //清空数组
  filterTagList.value = []
  filterTagList.value = Array.from(filterTagMap.value, ([key, value]) => value);
}


onBeforeMount(()=>{
  initFilterProduct()
  initMenuList()
})
onMounted(()=>{
  PVModuleList.value.forEach((module)=>{
    let pvModuleName = ''
    module.tags.forEach(tag=>{
      tagsMap.value.get(tag)
      pvModuleName+= tagsMap.value.get(tag).tagTitle + ' '
    })
    module.PVModuleName=pvModuleName
  })
  showModuleName.value=true
})
</script>

<style scoped>
.container{
  width: 100%;
}
.comprehensive{
  padding: 48px 0 96px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comprehensive-container{
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 66px;
}
.module-filter-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.menu-item-container{
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
}

.menu-item{
  margin-right: 8px;
  cursor: pointer;
  border-radius: 50px;
  padding: 4px 12px;
}

.itemIsHover{
  background-color: #d9d4d4;
}
.itemIsHover>p{
  color: black;
}


.itemIsSelected{
  background-color: #2585E0;
}
.itemIsSelected>p{
  color: white;
}


.module-list-box{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.module-wrapper{
  cursor: pointer;
  transition: all 0.3s ease,all 0.3s ease-in-out;
  margin-bottom: 32px;
  margin-right: 32px;
  width: calc((100% / 6 ) - 32px);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.module-wrapper:hover{
  transform: translateY(-15px);
}
.module-wrapper >img{
  width: 100%;
  object-fit: cover;
}
.module-wrapper >p{
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
  white-space: nowrap;
}
@media screen and (max-width: 1232px){
  .comprehensive-container{
    padding: 0 16px;
  }
}

@media screen and (max-width: 1024px){
  .module-wrapper{
    width: calc((100% / 5 ) - 32px);
  }
  .menu-item-container{
    transform: translateX(16px);
  }
  .module-list-box{
    transform: translateX(16px);
  }
}
@media screen and (max-width: 860px){
  .module-wrapper{
    width: calc((100% / 4 ) - 32px);
  }
}

@media screen and (max-width: 767px){
  .module-wrapper{
    width: calc((100% / 3 ) - 32px);
  }
  .menu-item{
    margin-bottom: 8px;
  }
  .comprehensive{
    padding: 24px 0 48px 0;
  }
  .container-title {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 26px;
  }
  .menu-item-container{
    margin-bottom: 8px;
  }
}

@media screen and (max-width: 480px){
  .module-wrapper{
    width: calc((100% / 2 ) - 32px);
  }

}
</style>
