using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;
using System.Drawing.Drawing2D;

namespace Gui.models
{
    internal class PanelButton : Button
    {
        public PanelButton()
        {
            DoubleBuffered = true;
        }

        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);
            GraphicsPath path = new GraphicsPath();
            path.AddArc(175, 50, 50, 50, 0, -180);
            e.Graphics.DrawPath(new Pen(Color.FromArgb(128, 255, 0, 0), 4), path);
        }
    }
}
