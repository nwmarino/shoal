﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace shoalGui
{
    internal class PanelController
    {
        internal static Panel manageArgPanel(Panel currentPanel, Panel targetPanel)
        {
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