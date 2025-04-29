const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooth648w/",
            name: "springbooth648w",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooth648w/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个性化推荐电商平台"
        } 
    }
}
export default base
