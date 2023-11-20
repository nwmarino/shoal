﻿using System.Drawing;
namespace Gui.models
{
    internal class LeftPanelButton : PanelButton
    {
        private readonly Point[] polygon = {new Point(x: 0, y: 35),
                                            new Point(x: 0, y: 0),
                                            new Point(x: 100, y: 0),
                                            new Point(x: 80, y: 35),
                                            new Point(x: 0, y: 35)};

    }
}
