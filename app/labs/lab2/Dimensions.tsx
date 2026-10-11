export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension">
        This sample box is declared 120px wide and 60px tall, so this long
        sentence overflows past the yellow background.
      </div>
      <div className="wd-my-dimension wd-bg-color-gray">My Dimension!</div>
      <div className="wd-my-dimension wd-bg-color-darkred wd-fg-color-white">
        This is a longer sentence used to show the the box can fit a lot of text.
      </div>
    </div>
  );
}
