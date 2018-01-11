import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FileTable from '../components/FileTable';
import { filterByName } from '../actions/filter';

const mapStateToProps = state => {
  const { files } = state.data;

  const { tags, types, name } = state.filter;

  const fileArray = Object.keys(files).map(id => files[id]);
  // let filterFiles = fileArray;

  const filterFiles = fileArray.filter(file => {
    const { tags: fileTags, type: fileType, name: fileName } = file;
    if (tags.length > 0) {
      if (fileTags.length < tags.length) return false;
      for (let i = 0, l = tags.length; i < l; ++i) {
        if (fileTags.indexOf(tags[i]) < 0) return false;
      }
    }
    // if (types.length > 0) {
    //   if (types.indexOf(fileType) < 0) return false;
    // }
    if (name) {
      if (fileName.indexOf(name) < 0) return false;
    }
    return true;
  });

  return {
    dataSource: filterFiles,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearch: name => {
    dispatch(filterByName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FileTable);
