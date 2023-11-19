using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Gui
{
    internal class PanelController
    {
        public static Panel AppointForePanel(Panel currentPanel, Panel targetPanel)
        {
            if (currentPanel == targetPanel)
            {
                currentPanel.Hide();
                return null;
            }
            if (currentPanel == null)
            {
                targetPanel.Show();
            }
            else if (currentPanel != targetPanel)
            {
                currentPanel.Hide();
                targetPanel.Show();
            }
            else
            {
                currentPanel.Hide();
            }
            return targetPanel;
        }
    }
}
