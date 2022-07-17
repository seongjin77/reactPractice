import DiaryItem from './DiaryItem'
// props의 {}를 써주는건 props가 객체로오는데 그 객체중에서 어느 하나만 찝어서 가져오겠다는 뜻.
const DiaryList = ({onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 리스트가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} /> // props에 이름을 안적어주고 전달해도 되나보다?
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
    diaryList : [],
};

export default DiaryList;
