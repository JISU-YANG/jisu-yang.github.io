const PathResource = {
    PROFILE: 'assets/',
    PROJECT_REVIEW: 'docs/essay/project-review/resource/',
    NOTE: 'docs/archive/learning-notes/resource/'
}
class PathBuilder{
    CDN = {
        _pathCDN: 'https://cdn.jsdelivr.net/gh/',
        _pathPage: 'jisu-yang/jisu-yang.github.io/',
        _directory: '',
        _file: '',
        category: function (category){
            this._directory = category;
            return this;
        },
        fileName: function (fileName){
            this._file = fileName;
            return this;
        },
        build: function () {
            return this._pathCDN + this._pathPage + this._directory + this._file;
        }
    }
}

const ImageDeliver = {
    _id: '',
    _category: '',
    _file: '',
    id: function (id) {
        this._id = id;
        return this;
    },
    category: function (category) {
        this._category = category;
        return this;
    },
    file: function (file) {
        this._file = file;
        return this;
    },
    delivery: function (){
        document.getElementById(this._id).setAttribute('src', new PathBuilder().CDN.category(this._category).fileName(this._file).build());
        return this;
    }
}