import {Page,Toolbar,ToolbarButton,Icon} from "react-onsenui";

constructor(props) {
    super(props);
    this.renderToolbar = this.renderToolbar.bind(this);
}

renderToolbar(){
  return(
    <Toolbar>
      <div className="left">
        <ToolbarButton onClick={this.props.show}>
          <Icon icon="md-menu" />
        </ToolbarButton>
      </div>
    </Toolbar>
  );
}