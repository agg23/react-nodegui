import {
  NodeWidget,
  QSize,
  QVariant,
  SizeAdjustPolicy,
  InsertPolicy,
  QTableWidgetSignals,
  QTableWidget,
  QTableWidgetItem,
} from "@nodegui/nodegui";
import { ViewProps, setViewProps } from "../View/RNView";
import { RNWidget } from "../config";
import { throwUnsupported } from "../../utils/helpers";

export interface TableWidgetProps extends ViewProps<QTableWidgetSignals> {
  data?: TableWidgetData;
  count?: number;
  iconSize?: QSize;
  frame?: boolean;
  currentIndex?: number;
  currentData?: QVariant;
  currentText?: string;
  duplicatesEnabled?: boolean;
  editable?: boolean;
  insertPolicy?: InsertPolicy;
  maxCount?: number;
  maxVisibleItems?: number;
  minimumContentsLength?: number;
  modelColumn?: number;
  sizeAdjustPolicy?: SizeAdjustPolicy;
}

type TableWidgetValue = {
  text: string;
  //   icon?: QIcon;
};

type TableWidgetItem = {
  [key: string]: TableWidgetValue;
};

type TableWidgetColumn = {
  text: string;
  key: string;
};

type TableWidgetData = {
  items: TableWidgetItem[];
  columns: TableWidgetColumn[];
};

const setTableWidgetProps = (
  widget: RNTableWidget,
  newProps: TableWidgetProps,
  oldProps: TableWidgetProps
) => {
  const setter: TableWidgetProps = {
    set data(data: TableWidgetData) {
      widget.clear();
      data.items.forEach((item, row) => {
        data.columns.forEach((columnDef, column) => {
          const tableItem = new QTableWidgetItem(item[columnDef.key].text);
          widget.setItem(row, column, tableItem);
        });
      });
    },
    set count(count: number) {
      widget.setProperty("count", count);
    },
    set iconSize(iconSize: QSize) {
      widget.setProperty("iconSize", iconSize.native);
    },
    set frame(frame: boolean) {
      widget.setProperty("frame", frame);
    },
    set currentIndex(currentIndex: number) {
      widget.setProperty("currentIndex", currentIndex);
    },
    set currentData(value: QVariant) {
      widget.setProperty("currentData", value.native);
    },
    set currentText(text: string) {
      widget.setProperty("currentText", text);
    },
    set duplicatesEnabled(enabled: boolean) {
      widget.setProperty("duplicatesEnabled", enabled);
    },
    set editable(enabled: boolean) {
      widget.setProperty("editable", enabled);
    },
    set insertPolicy(policy: InsertPolicy) {
      widget.setProperty("insertPolicy", policy);
    },
    set maxCount(count: number) {
      widget.setProperty("maxCount", count);
    },
    set maxVisibleItems(count: number) {
      widget.setProperty("maxVisibleItems", count);
    },
    set minimumContentsLength(count: number) {
      widget.setProperty("minimumContentsLength", count);
    },
    set modelColumn(column: number) {
      widget.setProperty("modelColumn", column);
    },
    set sizeAdjustPolicy(policy: SizeAdjustPolicy) {
      widget.setProperty("sizeAdjustPolicy", policy);
    },
  };
  Object.assign(setter, newProps);
  setViewProps(widget, newProps, oldProps);
};

/**
 * @ignore
 */
export class RNTableWidget extends QTableWidget implements RNWidget {
  setProps(newProps: TableWidgetProps, oldProps: TableWidgetProps): void {
    setTableWidgetProps(this, newProps, oldProps);
  }
  appendInitialChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  appendChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  removeChild(child: NodeWidget<any>): void {
    throwUnsupported(this);
  }
  static tagName = "tablewidget";
}
