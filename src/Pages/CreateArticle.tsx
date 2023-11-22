import styled from "styled-components";
import Header from "../ui/Header";
import LinkButton from "../ui/LinkButton";
import CreateArticleForm from "../features/article/CreateArticleForm";

const CreateArticle: React.FC = () => {
  return (
    <ArticleLayout>
      <Header>
        <LinkButton to="/articles" className="link">
          Вернуться
        </LinkButton>
      </Header>

      <CreateArticleForm />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    margin-right: 30px;
  }
`;

export default CreateArticle;
