import {FlexboxGrid} from 'rsuite';

export const Layout: React.FC = ({children}) => {
  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={12}>{children}</FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
