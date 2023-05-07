import styled from 'styled-components';
import M_FoodRecommend from './pages/FoodRecommend';
import M_Category from './pages/Category';
import M_Bookmark from './pages/Bookmark';
import M_Review from './pages/Review';

// 메인 페이지를 감싸는 컴포넌트
const Main = () => {
  //페이지들을 감싸는 메인 컨테이너
  const MainContainer = styled.main``;
  return (
    <MainContainer>
      <M_FoodRecommend />
      <M_Category />
      <M_Bookmark />
      <M_Review />
    </MainContainer>
  );
};

export default Main;
