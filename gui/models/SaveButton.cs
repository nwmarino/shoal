using Gui.utils;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Gui.models
{
    internal class SaveButton : RightPanelButton
    {
        public SaveButton() : base()
        {
            MouseClick += (sender, e) =>
            {
                toggled = false;
                Invalidate();
            };
        }  
    }
}
