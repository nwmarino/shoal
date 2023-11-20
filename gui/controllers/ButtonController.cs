using Gui.models;

namespace Gui.controllers
{
    internal class ButtonController
    {
        private PanelButton[] buttons;

        public ButtonController(PanelButton[] buttons)
        {
            this.buttons = buttons;
        }

        public void PushButtonPresence(PanelButton targetButton)
        {
            foreach (PanelButton button in buttons)
            {
                if (button != targetButton && button.toggled)
                { 
                    button.toggled = false;
                }
            }
        }
    }
}
