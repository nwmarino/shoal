using System.Drawing;
namespace Gui.models
{
    internal class RightPanelButton : PanelButton
    {
        protected Point[] rightPolygon = {new Point(x: 0, y: 35),
                                          new Point(x: 20, y: 0),
                                          new Point(x: 100, y: 0),
                                          new Point(x: 100, y: 35),
                                          new Point(x: 0, y: 35)};

        public RightPanelButton() : base()
        {
            polygon = rightPolygon;
        }
    }
}
