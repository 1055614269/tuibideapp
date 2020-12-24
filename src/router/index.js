import Vue from 'vue'
import Router from 'vue-router'

//-----------------------其他页面--------------------------------
import Index from '@/components/index'//首页
import HotCloudData from '@/components/hot/hot-cloud-data'//云数据
import AiVideo from '@/components/hot/ai-video'//AI视频
import ReleaseVideo from '@/components/hot/release-video'//发布视频




//-----------------------抖音页面--------------------------------
import TiktokScriptNormalBreed from '@/components/tiktok/script-page/script-normal-breed' //正常养号（抖音）
import TiktokScriptVerticalBreed from '@/components/tiktok/script-page/script-vertical-breed' //垂直养号（抖音）
import TiktokScriptPublishingWorks from '@/components/tiktok/script-page/script-publishing-works' //发布作品（抖音）
import TiktokScriptZeroFansFission from '@/components/tiktok/script-page/script-zero-fans-fission' //零粉裂变(抖音)
import TiktokScriptCommentsLike from '@/components/tiktok/script-page/script-comments-like' //评论点赞(抖音)
import TiktokScriptCommentsReply from '@/components/tiktok/script-page/script-comments-reply' //评论回复(抖音)
import TiktokScriptCommentsPrivateLetter from '@/components/tiktok/script-page/script-comments-private-letter' //评论私信(抖音)
import TiktokScriptCommentsFollow from '@/components/tiktok/script-page/script-comments-follow' //评论关注(抖音)
import TiktokScriptManyWorksThumbsUp from '@/components/tiktok/script-page/script-many-works-thumbs-up' //多作品点赞（抖音）
import TiktokScriptManyWorksThumbsComment from '@/components/tiktok/script-page/script-many-works-thumbs-comment' //多作品评论（抖音）
import TiktokScriptManyWorksThumbsPrivateLetter from '@/components/tiktok/script-page/script-many-works-thumbs-private-letter' //多作品私信（抖音）
import TiktokScriptManyWorksThumbsFollow from '@/components/tiktok/script-page/script-many-works-thumbs-follow' //多作品关注（抖音）
import TiktokScriptSearchWorksUserPrivateLetter from '@/components/tiktok/script-page/script-search-works-user-private-letter' //搜索用户私信（抖音）
import TiktokScriptSearchWorksUserFollow from '@/components/tiktok/script-page/script-search-works-user-follow' //搜索用户关注（抖音）
import TiktokScriptSearchWorksThumbsUp from '@/components/tiktok/script-page/script-search-works-thumbs-up' //搜索作品点赞（抖音）
import TiktokScriptSearchWorksThumbsComment from '@/components/tiktok/script-page/script-search-works-thumbs-comment' //搜索作品评论（抖音） 
import TiktokScriptSearchWorksThumbsPrivateLetter from '@/components/tiktok/script-page/script-search-works-thumbs-private-letter' //搜索作品私信（抖音）
import TiktokScriptEnterTheStudio from '@/components/tiktok/script-page/script-enter-the-studio' //进入直播间（抖音）
import TiktokScriptLikeTheLiveRoom from '@/components/tiktok/script-page/script-like-the-live-room' //直播间点赞（抖音）
import TiktokScriptLiveRoomMessage from '@/components/tiktok/script-page/script-live-room-message' //直播间留言（抖音）
import TiktokScriptFocusOnTheAnchor from '@/components/tiktok/script-page/script-focus-on-the-anchor' //关注主播（抖音）
import TiktokScriptFocusOnTheAudience from '@/components/tiktok/script-page/script-focus-on-the-audience' //关注@观众（抖音）
import TiktokScriptBrowseShoppingCart from '@/components/tiktok/script-page/script-browse-shopping-cart' //浏览购物车（抖音）
import TiktokScriptFanGroupLantern from '@/components/tiktok/script-page/script-fan-group-lantern' //粉丝团灯牌（抖音）
import TiktokScriptGivingGifts from '@/components/tiktok/script-page/script-giving-gifts' //送礼物（抖音）
import TiktokScriptEnterTheOpponentStudio from '@/components/tiktok/script-page/script-enter-the-opponent-studio' //对手直播间（抖音）

//-----------------------快手页面--------------------------------
import KwaiFuScriptNormalBreedKwaiFu from '@/components/kwai-fu/script-page/script-normal-breed' //正常养号（快手）
import KwaiFuScriptVerticalBreedKwaiF from '@/components/kwai-fu/script-page/script-vertical-breed' //垂直养号（快手）
import KwaiFuScriptPublishingWorksKwaiF from '@/components/kwai-fu/script-page/script-publishing-works' //发布作品（快手）
import KwaiFuScriptZeroFansFission from '@/components/kwai-fu/script-page/script-zero-fans-fission' //零粉裂变(快手)
import KwaiFuScriptFocusOnPrivateMessageUsers from '@/components/kwai-fu/script-page/script-focus-on-private-message-users' //关注私信用户(快手)
import KwaiFuScriptCommentsOnWorks from '@/components/kwai-fu/script-page/script-comments-on-works' //作品点赞评论(快手)
import KwaiFuScriptEnterTheStudio from '@/components/kwai-fu/script-page/script-enter-the-studio' //进入直播间（快手）
import KwaiFuScriptLikeTheLiveRoom from '@/components/kwai-fu/script-page/script-like-the-live-room' //直播间点赞（快手）
import KwaiFuScriptLiveRoomMessage from '@/components/kwai-fu/script-page/script-live-room-message' //直播间留言（快手）
import KwaiFukScriptFocusOnTheAnchor from '@/components/kwai-fu/script-page/script-focus-on-the-anchor' //关注主播（快手）
import KwaiFuScriptFocusOnTheAudience from '@/components/kwai-fu/script-page/script-focus-on-the-audience' //关注@观众（快手）
import KwaiFuScriptEnterTheOpponentStudio from '@/components/kwai-fu/script-page/script-enter-the-opponent-studio' //对手直播间（快手）
import KwaiFuScriptBrowseYellowCars from '@/components/kwai-fu/script-page/script-browse-yellow-cars' //浏览小黄车(快手)
import KwaiFuScriptFissionInLiveBroadcastingRoom from '@/components/kwai-fu/script-page/script-fission-in-live-broadcasting-room' //直播间裂变(快手)

//-----------------------小红书页面--------------------------------
import SmallRedBookScriptNormalBreed from '@/components/small-red-book/script-page/script-normal-breed' //正常养号（小红书）
import SmallRedBookScriptVerticalBreed from '@/components/small-red-book/script-page/script-vertical-breed' //垂直养号（小红书）
import SmallRedBookScriptPublishingWorks from '@/components/small-red-book/script-page/script-publishing-works' //发布作品（小红书）
import SmallRedBookScriptSearchWorksUserPrivateLetter from '@/components/small-red-book/script-page/script-search-works-user-private-letter' //搜索用户私信（小红书）

//-----------------------视频号页面--------------------------------
import VideoNumberScriptNormalBreed from '@/components/video-number/script-page/script-normal-breed' //正常养号（视频号）
import VideoNumberScriptVerticalBreed from '@/components/video-number/script-page/script-vertical-breed' //垂直养号（视频号）
import VideoNumberScriptPublishingWorks from '@/components/video-number/script-page/script-publishing-works' //发布作品（视频号）



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/HotCloudData',
      name: 'HotCloudData',
      component: HotCloudData
    },
    {
      path: '/AiVideo',
      name: 'AiVideo',
      component: AiVideo
    },
    {
      path: '/ReleaseVideo',
      name: 'ReleaseVideo',
      component: ReleaseVideo
    },
    
    //-----------------------抖音页面--------------------------------
    {
      path: '/Tiktok/ScriptNormalBreed',
      name: 'TiktokScriptNormalBreed',
      component: TiktokScriptNormalBreed
    },
    {
      path: '/Tiktok/ScriptVerticalBreed',
      name: 'TiktokScriptVerticalBreed',
      component: TiktokScriptVerticalBreed
    },
    {
      path: '/Tiktok/ScriptPublishingWorks',
      name: 'TiktokScriptPublishingWorks',
      component: TiktokScriptPublishingWorks
    }, {
      path: '/Tiktok/ScriptZeroFansFission',
      name: 'TiktokScriptZeroFansFission',
      component: TiktokScriptZeroFansFission
    }, {
      path: '/Tiktok/ScriptCommentsLike',
      name: 'TiktokScriptCommentsLike',
      component: TiktokScriptCommentsLike
    }, {
      path: '/Tiktok/ScriptCommentsReply',
      name: 'TiktokScriptCommentsReply',
      component: TiktokScriptCommentsReply
    }, {
      path: '/Tiktok/ScriptCommentsPrivateLetter',
      name: 'TiktokScriptCommentsPrivateLetter',
      component: TiktokScriptCommentsPrivateLetter
    }, {
      path: '/Tiktok/ScriptCommentsFollow',
      name: 'TiktokScriptCommentsFollow',
      component: TiktokScriptCommentsFollow
    },
    {
      path: '/Tiktok/ScriptManyWorksThumbsUp',
      name: 'TiktokScriptManyWorksThumbsUp',
      component: TiktokScriptManyWorksThumbsUp
    }, {
      path: '/Tiktok/ScriptManyWorksThumbsComment',
      name: 'TiktokScriptManyWorksThumbsComment',
      component: TiktokScriptManyWorksThumbsComment
    },
    {
      path: '/Tiktok/ScriptManyWorksThumbsPrivateLetter',
      name: 'TiktokScriptManyWorksThumbsPrivateLetter',
      component: TiktokScriptManyWorksThumbsPrivateLetter
    },
    {
      path: '/Tiktok/ScriptManyWorksThumbsFollow',
      name: 'TiktokScriptManyWorksThumbsFollow',
      component: TiktokScriptManyWorksThumbsFollow
    },
    {
      path: '/Tiktok/ScriptSearchWorksThumbsUp',
      name: 'TiktokScriptSearchWorksThumbsUp',
      component: TiktokScriptSearchWorksThumbsUp
    },
    {
      path: '/Tiktok/ScriptSearchWorksThumbsComment',
      name: 'TiktokScriptSearchWorksThumbsComment',
      component: TiktokScriptSearchWorksThumbsComment
    }, {
      path: '/Tiktok/ScriptSearchWorksThumbsPrivateLetter',
      name: 'TiktokScriptSearchWorksThumbsPrivateLetter',
      component: TiktokScriptSearchWorksThumbsPrivateLetter
    },
    {
      path: '/Tiktok/ScriptSearchWorksUserFollow',
      name: 'TiktokScriptSearchWorksUserFollow',
      component: TiktokScriptSearchWorksUserFollow
    },
    {
      path: '/Tiktok/ScriptSearchWorksUserPrivateLetter',
      name: 'TiktokScriptSearchWorksUserPrivateLetter',
      component: TiktokScriptSearchWorksUserPrivateLetter
    },
    {
      path: '/Tiktok/ScriptEnterTheStudio',
      name: 'TiktokScriptEnterTheStudio',
      component: TiktokScriptEnterTheStudio
    },
    {
      path: '/Tiktok/ScriptLikeTheLiveRoom',
      name: 'TiktokScriptLikeTheLiveRoom',
      component: TiktokScriptLikeTheLiveRoom
    },
    {
      path: '/Tiktok/ScriptLiveRoomMessage',
      name: 'TiktokScriptLiveRoomMessage',
      component: TiktokScriptLiveRoomMessage
    },
    {
      path: '/Tiktok/ScriptFocusOnTheAnchor',
      name: 'TiktokScriptFocusOnTheAnchor',
      component: TiktokScriptFocusOnTheAnchor
    },
    {
      path: '/Tiktok/ScriptFocusOnTheAudience',
      name: 'TiktokScriptFocusOnTheAudience',
      component: TiktokScriptFocusOnTheAudience
    },
    {
      path: '/Tiktok/ScriptBrowseShoppingCart',
      name: 'TiktokScriptBrowseShoppingCart',
      component: TiktokScriptBrowseShoppingCart
    },
    {
      path: '/Tiktok/ScriptFanGroupLantern',
      name: 'TiktokScriptFanGroupLantern',
      component: TiktokScriptFanGroupLantern
    },
    {
      path: '/Tiktok/ScriptGivingGifts',
      name: 'TiktokScriptGivingGifts',
      component: TiktokScriptGivingGifts
    },
    {
      path: '/Tiktok/ScriptEnterTheOpponentStudio',
      name: 'TiktokScriptEnterTheOpponentStudio',
      component: TiktokScriptEnterTheOpponentStudio
    },

    //-----------------------快手页面--------------------------------
    {
      path: '/KwaiFu/ScriptNormalBreed',
      name: 'KwaiFuScriptNormalBreed',
      component: KwaiFuScriptNormalBreedKwaiFu
    },
    {
      path: '/KwaiFu/ScriptVerticalBreed',
      name: 'KwaiFuScriptVerticalBreed',
      component: KwaiFuScriptVerticalBreedKwaiF
    },
    {
      path: '/KwaiFu/ScriptPublishingWorks',
      name: 'KwaiFuScriptPublishingWorks',
      component: KwaiFuScriptPublishingWorksKwaiF
    },
    {
      path: '/KwaiFu/ScriptZeroFansFission',
      name: 'KwaiFuScriptZeroFansFission',
      component: KwaiFuScriptZeroFansFission
    },
    {
      path: '/KwaiFu/ScriptFocusOnPrivateMessageUsers',
      name: 'KwaiFuScriptFocusOnPrivateMessageUsers',
      component: KwaiFuScriptFocusOnPrivateMessageUsers
    },
    {
      path: '/KwaiFu/ScriptCommentsOnWorks',
      name: 'KwaiFuScriptCommentsOnWorks',
      component: KwaiFuScriptCommentsOnWorks
    },
    {
      path: '/KwaiFu/ScriptEnterTheStudio',
      name: 'KwaiFuScriptEnterTheStudio',
      component: KwaiFuScriptEnterTheStudio
    },
    {
      path: '/KwaiFu/ScriptLikeTheLiveRoom',
      name: 'KwaiFuScriptLikeTheLiveRoom',
      component: KwaiFuScriptLikeTheLiveRoom
    },
    {
      path: '/KwaiFu/ScriptLiveRoomMessage',
      name: 'KwaiFuScriptLiveRoomMessage',
      component: KwaiFuScriptLiveRoomMessage
    },
    {
      path: '/KwaiFu/ScriptFocusOnTheAnchor',
      name: 'KwaiFukScriptFocusOnTheAnchor',
      component: KwaiFukScriptFocusOnTheAnchor
    },
    {
      path: '/KwaiFu/ScriptFocusOnTheAudience',
      name: 'KwaiFuScriptFocusOnTheAudience',
      component: KwaiFuScriptFocusOnTheAudience
    },
    {
      path: '/KwaiFu/ScriptEnterTheOpponentStudio',
      name: 'KwaiFuScriptEnterTheOpponentStudio',
      component: KwaiFuScriptEnterTheOpponentStudio
    },
    {
      path: '/KwaiFu/ScriptBrowseYellowCars',
      name: 'KwaiFuScriptBrowseYellowCars',
      component: KwaiFuScriptBrowseYellowCars
    },
    {
      path: '/KwaiFu/ScriptFissionInLiveBroadcastingRoom',
      name: 'KwaiFuScriptFissionInLiveBroadcastingRoom',
      component: KwaiFuScriptFissionInLiveBroadcastingRoom
    },
    //-----------------------小红书页面--------------------------------
    {
      path: '/SmallRedBook/ScriptNormalBreed',
      name: 'SmallRedBookScriptNormalBreed',
      component: SmallRedBookScriptNormalBreed
    },
    {
      path: '/SmallRedBook/ScriptPublishingWorks',
      name: 'SmallRedBookScriptPublishingWorks',
      component: SmallRedBookScriptPublishingWorks
    },
    {
      path: '/SmallRedBook/ScriptSearchWorksUserPrivateLetter',
      name: 'SmallRedBookScriptSearchWorksUserPrivateLetter',
      component: SmallRedBookScriptSearchWorksUserPrivateLetter
    },
    {
      path: '/SmallRedBook/ScriptVerticalBreed',
      name: 'SmallRedBookScriptVerticalBreed',
      component: SmallRedBookScriptVerticalBreed
    },

    //-----------------------视频号页面--------------------------------
    {
      path: '/VideoNumber/ScriptNormalBreed',
      name: 'VideoNumberScriptNormalBreed',
      component: VideoNumberScriptNormalBreed
    },
    {
      path: '/VideoNumber/ScriptVerticalBreed',
      name: 'VideoNumberScriptVerticalBreed',
      component: VideoNumberScriptVerticalBreed
    },
    {
      path: '/VideoNumber/ScriptPublishingWorks',
      name: 'VideoNumberScriptPublishingWorks',
      component: VideoNumberScriptPublishingWorks
    },












  ]
})
