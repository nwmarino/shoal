﻿using System;
using System.Windows.Forms;
using System.Drawing;
using System.Drawing.Drawing2D;

namespace Gui.models
{
    internal class PanelButton : Button
    {
        protected Point[] polygon = {new Point(x: 0, y: 35),
                                    new Point(x: 20, y: 0),
                                    new Point(x: 100, y: 0),
                                    new Point(x: 80, y: 35),
                                    new Point(x: 0, y: 35)};
        private Color theme;
        private Color _onHoverButtonColor;
        private Color _onHoverBorderColor;
        private Color _onClickButtonColor;
        private Color _onClickBorderColor;
        private Color _buttonColor;
        private Color _borderColor;
        private Color _textColor;
        private bool _hovering;
        private bool _clicked;
        private bool _toggled;

        public Color onHoverButtonColor
        {
            get { return _onHoverButtonColor; }
            set
            {
                _onHoverButtonColor = value;
                Invalidate();
            }
        }

        public Color onHoverBorderColor
        {
            get { return _onHoverBorderColor; }
            set
            {
                _onHoverBorderColor = value;
                Invalidate();
            }
        }

        public Color onClickButtonColor
        {
            get { return _onClickButtonColor; }
            set
            {
                _onClickButtonColor = value;
                Invalidate();
            }
        }

        public Color onClickBorderColor
        {
            get { return _onClickBorderColor; }
            set
            {
                _onClickBorderColor = value;
                Invalidate();
            }
        }

        public Color buttonColor
        {
            get { return _buttonColor; }
            set
            {
                _buttonColor = value;
                Invalidate();
            }
        }

        public Color borderColor
        {
            get { return _borderColor; }
            set
            {
                _borderColor = value;
                Invalidate();
            }
        }

        public Color textColor
        {
            get { return _textColor; }
            set
            {
                _textColor = value;
                Invalidate();
            }
        }

        public bool hovering
        {
            get { return _hovering; }
            set
            {
                _hovering = value;
                Invalidate();
            }
        }

        public bool clicked
        {
            get { return _clicked; }
            set
            {
                _clicked = value;
                Invalidate();
            }
        }

        public bool toggled
        {
            get { return _toggled; }
            set
            {
                _toggled = value;
                if (value) textColor = Color.FromArgb(20, 20, 20);
                else textColor = Color.White;
                Invalidate();
            }
        }

        public PanelButton()
        {
            SetGlobalParams();
            hovering = false;
            clicked = false;
            MouseEnter += (sender, e) =>
            {
                hovering = true;
                Invalidate();
            };
            MouseLeave += (sender, e) =>
            {
                clicked = false;
                hovering = false;
                Invalidate();
            };
            MouseDown += (sender, e) =>
            {
                clicked = true;
                Invalidate();
            };
            MouseCaptureChanged += (sender, e) =>
            {
                clicked = false;
                Invalidate();
            };
            MouseClick += (sender, e) =>
            {
                if (!toggled)
                {
                    toggled = true;
                }
                else
                {
                    toggled = false;
                }
                Invalidate();
            };
        }

        protected private void SetGlobalParams()
        {
            theme = Color.FromArgb(90, 90, 90);
            buttonColor = theme;
            borderColor = theme;
            FlatAppearance.MouseDownBackColor = Color.Transparent;
            FlatAppearance.MouseOverBackColor = Color.Transparent;
            FlatAppearance.CheckedBackColor = Color.Transparent;
            FlatAppearance.BorderSize = 0;
            FlatStyle = FlatStyle.Flat;
            textColor = Color.White;
            onHoverButtonColor = Color.FromArgb(buttonColor.R + 20, buttonColor.G + 20, buttonColor.B + 20);
            onHoverBorderColor = Color.FromArgb(borderColor.R + 20, borderColor.G + 20, borderColor.B + 20);
            onClickButtonColor = Color.FromArgb(buttonColor.R + 50, buttonColor.G + 50, buttonColor.B + 50);
            onClickBorderColor = Color.FromArgb(borderColor.R + 50, borderColor.G + 50, borderColor.B + 50);
            Size = new Size(width: 100, height: 35);
        }

        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);
            Color currentButtonColor = buttonColor;
            Color currentBorderColor = borderColor;
            if (hovering)
            {
                currentButtonColor = onHoverButtonColor;
                currentBorderColor = onHoverBorderColor;
            }
            if (clicked)
            {
                currentButtonColor = onClickButtonColor;
                currentBorderColor = onClickBorderColor;
            }
            if (toggled)
            {
                currentBorderColor = Color.FromArgb(225, 225, 225);
                currentButtonColor = Color.FromArgb(225, 225, 225);
            }
            GraphicsPath path = new GraphicsPath();
            Graphics g = e.Graphics;
            path.AddPolygon(polygon);
            Pen pen = new Pen(currentBorderColor, 1);
            SolidBrush brush = new SolidBrush(currentButtonColor);
            e.Graphics.DrawPath(pen, path);
            e.Graphics.FillPath(brush, path);
            Region = new Region(path);
            pen.Dispose();
            brush.Dispose();
            brush = new SolidBrush(textColor);
            SizeF stringSize = g.MeasureString(Text, Font);
            g.DrawString(Text, Font, brush, (Width - stringSize.Width) / 2, (Height - stringSize.Height) / 2);
            brush.Dispose();
        }
    }
}
